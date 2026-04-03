<template>
  <section class="rally-map">
    <h2>Suivre nos voitures au Maroc en direct</h2>
    <p>Découvrez le parcours du rallye et la position actuelle de notre équipage.</p>

    <div class="tracker-info">
      <span>🚗 Position en direct</span>
      <span v-if="distanceKm > 0">📏 Distance parcourue : {{ distanceKm }} km</span>
      <span v-if="lastUpdate" class="last-update">🕐 Dernière mise à jour : {{ lastUpdate }}</span>
      <span v-if="battery !== null" :class="batteryClass">🔋 {{ battery }}%</span>
    </div>

    <div v-if="connectionError" class="error-banner">
      ⚠️ Connexion perdue — nouvelle tentative en cours...
    </div>

    <div id="map"></div>
  </section>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { createClient } from "@supabase/supabase-js";

// ─── Clé publique "anon" uniquement — lecture seule, sans danger ───
// Remplace ces deux valeurs par celles de ton projet Supabase
// (Supabase > Settings > API)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default {
  name: "RallyeMap",

  data() {
    return {
      map: null,
      marker: null,
      route: [],
      routePolyline: null,
      distanceKm: 0,
      totalDistance: 0,
      lastUpdate: null,
      battery: null,
      connectionError: false,
      subscription: null,
    };
  },

  computed: {
    batteryClass() {
      if (this.battery === null) return "";
      if (this.battery > 50) return "battery-ok";
      if (this.battery > 20) return "battery-warn";
      return "battery-low";
    },
  },

  async mounted() {
    this.initMap();
    this.initStages();
    this.initCar();
    await this.loadHistorique();
    this.listenCarPosition();
  },

  beforeUnmount() {
    if (this.subscription) {
      supabase.removeChannel(this.subscription);
    }
  },

  methods: {
    initMap() {
      this.map = L.map("map", { minZoom: 4, maxZoom: 18 });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
      this.map.setView([31.63, -8], 6);
    },

    initStages() {
      const stages = [
        { name: "Algéciras",   coords: [36.1408, -5.4562] },
        { name: "Azrou",       coords: [33.4344, -5.2213] },
        { name: "Merzouga",    coords: [31.0994, -4.0126] },
        { name: "Mer de Sable",coords: [31.1200, -3.9800] },
        { name: "Chegaga",     coords: [29.8240, -5.7200] },
        { name: "Tizounine",   coords: [30.2000, -5.9000] },
        { name: "Labouirat",   coords: [29.8500, -6.1000] },
        { name: "M'Sseyed",    coords: [29.3500, -6.3000] },
        { name: "Boumansour",  coords: [30.9000, -9.1000] },
        { name: "Essaouira",   coords: [31.5085, -9.7595] },
        { name: "Tanger Med",  coords: [35.8950, -5.5030] },
      ];

      const stageCoords = stages.map((s) => {
        L.marker(s.coords).addTo(this.map).bindPopup(s.name);
        return s.coords;
      });

      const stageLine = L.polyline(stageCoords, {
        color: "#2563eb",
        weight: 3,
        dashArray: "6",
      }).addTo(this.map);

      this.map.fitBounds(stageLine.getBounds(), { padding: [40, 40] });
    },

    initCar() {
      const carIcon = L.icon({ iconUrl: "/car.png", iconSize: [40, 40] });
      this.marker = L.marker([31.63, -8], { icon: carIcon }).addTo(this.map);
      this.routePolyline = L.polyline([], { color: "#e63946", weight: 4 }).addTo(this.map);
    },

    // Charge l'historique des positions au démarrage
    async loadHistorique() {
      const { data, error } = await supabase
        .from("car_positions")
        .select("lat, lng, recorded_at, battery")
        .order("recorded_at", { ascending: true })
        .limit(500);

      if (error) {
        console.error("Erreur chargement historique:", error);
        return;
      }

      if (!data || data.length === 0) return;

      data.forEach((pos, i) => {
        const newPos = [pos.lat, pos.lng];
        this.route.push(newPos);

        if (i > 0) {
          const prev = this.route[i - 1];
          this.totalDistance += this.calculateDistance(prev, newPos);
        }
      });

      this.routePolyline.setLatLngs(this.route);
      this.distanceKm = (this.totalDistance / 1000).toFixed(1);

      const last = data[data.length - 1];
      this.marker.setLatLng([last.lat, last.lng]);
      this.map.panTo([last.lat, last.lng]);
      this.lastUpdate = this.formatDate(last.recorded_at);
      this.battery = last.battery ?? null;
    },

    // Écoute les nouvelles positions en temps réel
    listenCarPosition() {
      this.subscription = supabase
        .channel("car_positions_changes")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "car_positions" },
          (payload) => {
            this.connectionError = false;
            const data = payload.new;
            const newPos = [data.lat, data.lng];
            const prevPos = this.route.length ? this.route[this.route.length - 1] : newPos;

            animateMarker(this.marker, prevPos, newPos);

            this.route.push(newPos);
            this.routePolyline.setLatLngs(this.route);

            if (this.route.length > 1) {
              this.totalDistance += this.calculateDistance(prevPos, newPos);
              this.distanceKm = (this.totalDistance / 1000).toFixed(1);
            }

            this.map.panTo(newPos);
            this.lastUpdate = this.formatDate(data.recorded_at);
            this.battery = data.battery ?? null;
          }
        )
        .subscribe((status) => {
          if (status === "CHANNEL_ERROR") {
            this.connectionError = true;
          }
        });
    },

    calculateDistance(prev, next) {
      return L.latLng(prev).distanceTo(L.latLng(next));
    },

    formatDate(isoString) {
      return new Date(isoString).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};

function animateMarker(marker, start, end) {
  let startTime = null;
  function animate(time) {
    if (!startTime) startTime = time;
    const progress = (time - startTime) / 1500;
    const lat = start[0] + (end[0] - start[0]) * progress;
    const lng = start[1] + (end[1] - start[1]) * progress;
    marker.setLatLng([lat, lng]);
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
</script>

<style>
.rally-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  gap: 15px;
}

.rally-map h2 { font-size: 2rem; margin-bottom: 10px; }
.rally-map p  { max-width: 700px; font-size: 1.1rem; line-height: 1.6; }

.tracker-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  font-weight: 600;
  font-size: 1rem;
}

.battery-ok   { color: #16a34a; }
.battery-warn { color: #d97706; }
.battery-low  { color: #dc2626; }
.last-update  { color: #6b7280; font-weight: 400; }

.error-banner {
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
}

#map {
  width: 100%;
  max-width: 900px;
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .rally-map h2 { font-size: 1.6rem; }
  .rally-map p  { font-size: 1rem; }
  #map          { height: 400px; }
}
</style>