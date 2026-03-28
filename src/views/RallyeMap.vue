<template>
  <section class="rally-map">
    <h2>Suivre nos voitures au Maroc en direct</h2>
    <p>
        Découvrez le parcours du rallye et la position actuelle
        de notre équipage.
    </p>
    <div class="tracker-info">
      🚗 Position en direct 
      📏 Distance parcourue : {{ distanceKm }} km
    </div>
    <div id="map"></div>
  </section>
</template>

<script>
import "leaflet/dist/leaflet.css"
import L from "leaflet"

import { db } from "../firebase"
import { ref, onChildAdded } from "firebase/database"

export default {

name: "RallyMap",

data(){
return{
map:null,
marker:null,
route:[],
routePolyline:null,
distanceKm:0,
totalDistance:0
}
},

mounted(){

this.initMap()
this.initStages()
this.initCar()
this.listenCarPosition()

},

methods:{

initMap(){

this.map = L.map("map",{
minZoom:4,
maxZoom:18
})

L.tileLayer(
"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
{
attribution:'© OpenStreetMap'
}
).addTo(this.map)

this.map.setView([31.63,-8],6)

},

initStages(){

const stages = [
 {name:"Algéciras", coords:[36.1408,-5.4562]},
 {name:"Azrou", coords:[33.4344,-5.2213]},
 {name:"Merzouga", coords:[31.0994,-4.0126]},
 {name:"Mer de Sable", coords:[31.1200,-3.9800]},
 {name:"Chegaga", coords:[29.8240,-5.7200]},
 {name:"Tizounine", coords:[30.2000,-5.9000]},
 {name:"Labouirat", coords:[29.8500,-6.1000]},
 {name:"M'Sseyed", coords:[29.3500,-6.3000]},
 {name:"Boumansour", coords:[30.9000,-9.1000]},
 {name:"Essaouira", coords:[31.5085,-9.7595]},
 {name:"Tanger Med", coords:[35.8950,-5.5030]}
];

const stageCoords = []

stages.forEach(stage=>{

L.marker(stage.coords)
.addTo(this.map)
.bindPopup(stage.name)

stageCoords.push(stage.coords)

})

// ligne bleue reliant les étapes
const stageLine = L.polyline(stageCoords,{
color:"#2563eb",
weight:3,
dashArray:"6"
}).addTo(this.map)

// zoom automatique
this.map.fitBounds(stageLine.getBounds(),{
padding:[40,40]
})

},

initCar(){

const carIcon = L.icon({
iconUrl:"/car.png",
iconSize:[40,40]
})

this.marker = L.marker([31.63,-8],{
icon:carIcon
}).addTo(this.map)

// tracé rouge du trajet réel
this.routePolyline = L.polyline([],{
color:"#e63946",
weight:4
}).addTo(this.map)

},

listenCarPosition(){

const carRef = ref(db,"car_positions")

onChildAdded(carRef,(snapshot)=>{
  console.log("snapshot key:", snapshot.key)
  console.log("snapshot value:", snapshot.val())

const data = snapshot.val()

if(!data) return

const newPos = [data.lat,data.lng]

// position précédente
const prevPos = this.route.length
? this.route[this.route.length-1]
: newPos

// animation voiture
animateMarker(this.marker,prevPos,newPos)

// ajout trajet
this.route.push(newPos)
this.routePolyline.setLatLngs(this.route)

// calcul distance
if(this.route.length>1){

this.totalDistance += calculateDistance(prevPos,newPos)

this.distanceKm = (this.totalDistance/1000).toFixed(1)

}

// recentrage carte
this.map.panTo(newPos)

})

}

}

}


// animation fluide de la voiture
function animateMarker(marker,start,end){

let startTime=null

function animate(time){

if(!startTime) startTime=time

const progress=(time-startTime)/1500

const lat=start[0]+(end[0]-start[0])*progress
const lng=start[1]+(end[1]-start[1])*progress

marker.setLatLng([lat,lng])

if(progress<1){
requestAnimationFrame(animate)
}

}

requestAnimationFrame(animate)

}

// calcul distance GPS
function calculateDistance(prev,next){

const p1=L.latLng(prev)
const p2=L.latLng(next)

return p1.distanceTo(p2)

}

</script>

<style>

.rally-map {
  display: flex;
  flex-direction: column;
  align-items: center;        /* centre horizontalement */
  justify-content: center;
  text-align: center;         /* centre le texte */
  padding: 40px 20px;
  max-width: 1000px;          /* limite la largeur globale */
  margin: 0 auto;             /* centre la section dans la page */
  gap: 15px;                  /* espace entre les éléments */
}

.rally-map h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.rally-map p {
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.tracker-info {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

#map {
  width: 100%;
  max-width: 900px;           /* largeur raisonnable */
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

/* Responsive tablette */
@media (max-width: 768px) {

  .rally-map h2 {
    font-size: 1.6rem;
  }

  .rally-map p {
    font-size: 1rem;
  }

  #map {
    height: 400px;
  }

}
</style>