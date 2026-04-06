<template>
  <div class="evenements">

    <!-- ── Hero ── -->
    <section class="hero-events">
      <div class="container hero-events-inner">
        <p class="kicker">Sport · Culture · Sensibilisation</p>
        <h1>Nos événements</h1>
        <p class="hero-lead">
          Des rencontres inclusives organisées tout au long de l'année,
          ouvertes à toutes et tous, valides ou en situation de handicap.
        </p>
      </div>
    </section>

    <!-- ── Filtres + Stats ── -->
    <section class="toolbar-section">
      <div class="container toolbar">
        <div class="filters">
          <button
            v-for="f in filters"
            :key="f.key"
            :class="['filter-btn', { active: activeFilter === f.key }]"
            @click="activeFilter = f.key"
          >
            {{ f.label }}
            <span class="filter-count">{{ countByFilter(f.key) }}</span>
          </button>
        </div>
        <div class="toolbar-stats">
          <span>{{ filteredEvents.length }} événement{{ filteredEvents.length > 1 ? 's' : '' }}</span>
        </div>
      </div>
    </section>

    <!-- ── Événements à venir ── -->
    <section v-if="upcomingEvents.length" class="events-section">
      <div class="container">
        <div class="section-divider">
          <span class="divider-pill divider-pill--upcoming">À venir</span>
        </div>
        <div class="cards-grid">
          <article
            v-for="event in upcomingEvents"
            :key="event.id"
            class="ev-card ev-card--upcoming"
          >
            <div class="ev-img-wrap">
              <img
                v-if="event.image"
                :src="event.image"
                :alt="event.title"
                class="ev-img"
              />
              <div v-else class="ev-img-placeholder">
                <span class="ev-img-icon">{{ categoryIcon(event.category) }}</span>
              </div>
              <span class="ev-ribbon">À venir</span>
              <span :class="['ev-cat-tag', `ev-cat-tag--${event.category}`]">
                {{ categoryLabel(event.category) }}
              </span>
            </div>
            <div class="ev-body">
              <div class="ev-date">{{ event.date }}</div>
              <h3 class="ev-title">{{ event.title }}</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {{ event.location }}
              </p>
              <p v-if="event.description" class="ev-desc">{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── Événements passés ── -->
    <section v-if="pastEvents.length" class="events-section events-section--past">
      <div class="container">
        <div class="section-divider">
          <span class="divider-pill divider-pill--past">Déjà réalisés</span>
        </div>
        <div class="cards-grid">
          <article
            v-for="event in pastEvents"
            :key="event.id"
            class="ev-card ev-card--past"
          >
            <div class="ev-img-wrap">
              <img
                v-if="event.image"
                :src="event.image"
                :alt="event.title"
                class="ev-img ev-img--past"
              />
              <div v-else class="ev-img-placeholder ev-img-placeholder--past">
                <span class="ev-img-icon">{{ categoryIcon(event.category) }}</span>
              </div>
              <span :class="['ev-cat-tag', `ev-cat-tag--${event.category}`]">
                {{ categoryLabel(event.category) }}
              </span>
            </div>
            <div class="ev-body">
              <div class="ev-date ev-date--past">{{ event.date }}</div>
              <h3 class="ev-title">{{ event.title }}</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {{ event.location }}
              </p>
              <p v-if="event.description" class="ev-desc">{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── Message si aucun résultat ── -->
    <section v-if="filteredEvents.length === 0" class="empty-state">
      <div class="container">
        <p class="empty-icon">🔍</p>
        <p class="empty-text">Aucun événement dans cette catégorie pour le moment.</p>
        <button class="btn btn-primary" @click="activeFilter = 'all'">Voir tous les événements</button>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="cta-section">
      <div class="container cta-inner">
        <div>
          <h2>Vous souhaitez participer ?</h2>
          <p>Bénévole, partenaire ou simplement curieux — contactez-nous pour rejoindre l'aventure.</p>
        </div>
        <div class="cta-actions">
          <router-link to="/nous-aider" class="btn btn-primary">Nous soutenir</router-link>
          <router-link to="/contact" class="btn btn-outline-navy">Nous contacter</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "EvenementsView",

  data() {
    return {
      activeFilter: "all",

      filters: [
        { key: "all",          label: "Tous" },
        { key: "sport",        label: "Sport" },
        { key: "culture",      label: "Culture" },
        { key: "caritatif",    label: "Caritatif" },
        { key: "sensibilisation", label: "Sensibilisation" },
      ],

      // ─── Liste des événements ───────────────────────────────────
      // Pour ajouter un événement : copier un bloc et ajuster les valeurs.
      // upcoming: true  = à venir  |  false = passé
      // category: "sport" | "culture" | "caritatif" | "sensibilisation"
      // image: chemin depuis /public (ex: "/Paratennis.png") ou null
      events: [
        {
          id: 1,
          upcoming: true,
          category: "sport",
          title: "Rallye 205 Trophée — Maroc",
          date: "3 → 13 mai 2026",
          location: "Algéciras → Essaouira (Maroc)",
          description: "9 jours de raid humanitaire et solidaire à travers le désert marocain avec 4 équipages de l'association.",
          image: "/Les205.jpeg",
        },
        {
          id: 2,
          upcoming: false,
          category: "caritatif",
          title: "Soirée caritative au Loft Uzès",
          date: "21 mars 2026",
          location: "Discothèque le Loft, Saint-Quentin-la-Poterie",
          description: "Soirée de collecte de fonds pour financer le raid et les dons humanitaires au Maroc.",
          image: "/Les205AuLoft.png",
        },
        {
          id: 3,
          upcoming: false,
          category: "sport",
          title: "Soirée Paratennis",
          date: "13 mars 2026",
          location: "Meyzieu Tennis, 139 rue de la République",
          description: "Découverte du tennis en fauteuil roulant, ouvert à tous. Dépassement de soi, inclusion, bonne humeur.",
          image: "/Paratennis.png",
        },
        {
          id: 4,
          upcoming: false,
          category: "culture",
          title: "Loto",
          date: "8 février 2026",
          location: "Espace Jean Poperen, Meyzieu",
          description: "Grande soirée loto conviviale et inclusive pour soutenir les projets de l'association.",
          image: "/Loto.jpg",
        },
        {
          id: 5,
          upcoming: false,
          category: "sport",
          title: "Journée Rugby inclusif — US Meyzieu",
          date: "2025",
          location: "Stade de Meyzieu",
          description: "Rencontre sportive avec le club de rugby de Meyzieu, mêlant joueurs valides et personnes en situation de handicap.",
          image: "/RugbyMeyzieu.png",
        },
        {
          id: 6,
          upcoming: false,
          category: "sensibilisation",
          title: "Soirée de présentation de l'association",
          date: "26 janvier 2026",
          location: "Garage DG Automobiles, 118 rue de la République, Meyzieu",
          description: "Présentation officielle de l'association, découverte des voitures 205 et apéro dinatoire.",
          image: "/travail-en-equipe.png",
        },
      ],
    };
  },

  computed: {
    filteredEvents() {
      if (this.activeFilter === "all") return this.events;
      return this.events.filter(e => e.category === this.activeFilter);
    },
    upcomingEvents() {
      return this.filteredEvents.filter(e => e.upcoming);
    },
    pastEvents() {
      return this.filteredEvents.filter(e => !e.upcoming);
    },
  },

  methods: {
    countByFilter(key) {
      if (key === "all") return this.events.length;
      return this.events.filter(e => e.category === key).length;
    },
    categoryLabel(cat) {
      const labels = {
        sport: "Sport",
        culture: "Culture",
        caritatif: "Caritatif",
        sensibilisation: "Sensibilisation",
      };
      return labels[cat] || cat;
    },
    categoryIcon(cat) {
      const icons = {
        sport: "🏃",
        culture: "🎭",
        caritatif: "❤️",
        sensibilisation: "💬",
      };
      return icons[cat] || "📅";
    },
  },
};
</script>

<style scoped>
/* ── Hero ── */
.hero-events {
  background:
    linear-gradient(120deg, rgba(8,29,88,.95), rgba(13,44,128,.82)),
    radial-gradient(circle at 75% 40%, rgba(233,52,69,.28), transparent 50%);
  color: var(--bg-white);
  padding: 80px 0 64px;
}

.hero-events-inner { max-width: 640px; }

.kicker {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fecdd3;
  margin-bottom: 0.6rem;
}

.hero-lead {
  font-size: 1.05rem;
  opacity: .88;
  margin-top: .5rem;
  max-width: 520px;
  line-height: 1.65;
}

/* ── Toolbar filtres ── */
.toolbar-section {
  background: var(--bg-white);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
  position: sticky;
  top: 72px;
  z-index: 8;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.filters { display: flex; gap: 8px; flex-wrap: wrap; }

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: var(--bg-white);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-soft);
  cursor: pointer;
  transition: all .15s;
}

.filter-btn:hover { border-color: var(--blue); color: var(--blue); }

.filter-btn.active {
  background: var(--blue);
  border-color: var(--blue);
  color: var(--bg-white);
}

.filter-count {
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(0,0,0,.1);
  padding: 1px 6px;
  border-radius: var(--radius-pill);
}

.filter-btn.active .filter-count { background: rgba(255,255,255,.2); }

.toolbar-stats {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
}

/* ── Sections événements ── */
.events-section { padding: 56px 0 0; }
.events-section--past { padding: 40px 0 56px; }

.section-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.divider-pill {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.divider-pill--upcoming {
  background: #ffe4e6;
  color: #be123c;
  border: 1px solid #ffd5d8;
}

.divider-pill--past {
  background: var(--bg-light);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

/* ── Grille de cards ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* ── Card ── */
.ev-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform .2s, box-shadow .2s;
  display: flex;
  flex-direction: column;
}

.ev-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(4,17,57,.1);
}

.ev-card--upcoming { border-color: #ffd5d8; }
.ev-card--past     { opacity: .92; }

/* Image */
.ev-img-wrap {
  position: relative;
  overflow: hidden;
  height: 180px;
  background: var(--bg-light);
}

.ev-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s;
}

.ev-card:hover .ev-img { transform: scale(1.04); }

.ev-img--past {
  filter: grayscale(25%);
}

.ev-img-placeholder {
  width: 100%;
  height: 100%;
  background: var(--bg-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ev-img-placeholder--past { background: var(--bg-light); }

.ev-img-icon { font-size: 2.5rem; }

/* Badge ribbon À venir */
.ev-ribbon {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: var(--font-heading);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  background: var(--red);
  color: var(--bg-white);
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

/* Tag catégorie */
.ev-cat-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: var(--font-heading);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 3px 9px;
  border-radius: var(--radius-pill);
}

.ev-cat-tag--sport        { background: #e8eefc; color: #0d2c80; }
.ev-cat-tag--culture      { background: #ffe4e6; color: #be123c; }
.ev-cat-tag--caritatif    { background: #e1f5ee; color: #0f6e56; }
.ev-cat-tag--sensibilisation { background: #faeeda; color: #854f0b; }

/* Corps de la card */
.ev-body {
  padding: 1rem 1.1rem 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ev-date {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--red);
  margin-bottom: 5px;
}

.ev-date--past { color: var(--text-muted); }

.ev-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--blue-dark);
  line-height: 1.3;
  margin: 0 0 8px;
}

.ev-location {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0 0 8px;
  line-height: 1.4;
}

.ev-location svg { flex-shrink: 0; margin-top: 2px; }

.ev-desc {
  font-size: 0.85rem;
  color: var(--text-soft);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

/* ── Empty state ── */
.empty-state {
  padding: 80px 0;
  text-align: center;
}

.empty-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.empty-text { font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem; }

/* ── CTA bas de page ── */
.cta-section {
  background: linear-gradient(120deg, rgba(8,29,88,.97), rgba(13,44,128,.9));
  padding: 64px 0;
  margin-top: 56px;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-inner h2 {
  color: var(--bg-white);
  text-align: left;
  margin-bottom: 0.5rem;
}

.cta-inner p {
  color: rgba(255,255,255,.75);
  font-size: 1rem;
  margin: 0;
}

.cta-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.btn-outline-navy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.75rem 1.4rem;
  cursor: pointer;
  text-decoration: none;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.3);
  color: var(--bg-white);
  transition: background .15s;
}

.btn-outline-navy:hover { background: rgba(255,255,255,.2); }

/* ── Responsive ── */
@media (max-width: 1000px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .cards-grid    { grid-template-columns: 1fr; }
  .toolbar       { flex-direction: column; align-items: flex-start; }
  .cta-inner     { flex-direction: column; }
  .cta-inner h2  { text-align: center; }
  .cta-actions   { justify-content: center; width: 100%; }
  .hero-events   { padding: 56px 0 44px; }
}
</style>