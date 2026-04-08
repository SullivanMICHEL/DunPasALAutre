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

    <!-- ── Filtres ── -->
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
          {{ filteredAll.length }} événement{{ filteredAll.length > 1 ? 's' : '' }}
        </div>
      </div>
    </section>

    <!-- ── Card HERO départ + rallye (toujours visible si filtre "tous" ou "sport") ── -->
    <section
      v-if="activeFilter === 'all' || activeFilter === 'sport'"
      class="hero-event-section"
    >
      <div class="container">
        <div class="section-divider">
          <span class="divider-pill divider-pill--upcoming">L'événement phare</span>
        </div>

        <div class="hero-event-card">
          <div class="hero-event-img">
            <img src="/Les205.jpeg" alt="Rallye 205 Trophée — Départ et raid au Maroc">
            <div class="hero-event-img-overlay"></div>
          </div>

          <div class="hero-event-body">
            <div class="hero-event-meta">
              <span class="ev-cat-tag ev-cat-tag--sport ev-cat-tag--inline">Sport</span>
              <span class="ev-ribbon-inline">À venir</span>
            </div>

            <h2 class="hero-event-title">Départ pour le 205 Trophée — Maroc</h2>

            <div class="hero-event-dates">
              <div class="date-milestone">
                <div class="date-milestone-label">Départ depuis Jonage</div>
                <div class="date-milestone-value">30 avril 2026</div>
              </div>
              <div class="date-milestone-arrow">→</div>
              <div class="date-milestone">
                <div class="date-milestone-label">Départ Tanger</div>
                <div class="date-milestone-value">3 mai 2026</div>
              </div>
              <div class="date-milestone-arrow">→</div>
              <div class="date-milestone">
                <div class="date-milestone-label">Arrivée Essaouira</div>
                <div class="date-milestone-value">13 mai 2026</div>
              </div>
            </div>

            <p class="hero-event-desc">
              Le moment pour lequel tout a été construit. 4 équipages de l'association
              prennent la route depuis l'école primaire de Jonage direction Tanger, avant de s'élancer
              pour 9 jours de raid humanitaire et solidaire à travers le désert marocain —
              3 000 km entre dunes, pistes sableuses et étapes humanitaires.
            </p>

            <div class="hero-event-stats">
              <div class="hero-stat"><strong>3 000 km</strong><span>de parcours</span></div>
              <div class="hero-stat"><strong>9 jours</strong><span>de raid</span></div>
              <div class="hero-stat"><strong>4</strong><span>équipages</span></div>
              <div class="hero-stat"><strong>3 écoles</strong><span>soutenues</span></div>
            </div>

            <!-- Compte à rebours -->
            <div class="countdown-mini">
              <div class="countdown-mini-label">Départ dans</div>
              <div class="countdown-mini-boxes">
                <div class="cbox"><strong>{{ timeLeft.days }}</strong><span>j</span></div>
                <div class="cbox"><strong>{{ timeLeft.hours }}</strong><span>h</span></div>
                <div class="cbox"><strong>{{ timeLeft.minutes }}</strong><span>min</span></div>
                <div class="cbox"><strong>{{ timeLeft.seconds }}</strong><span>sec</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── Événements à venir ── -->
    <section v-if="upcomingFiltered.length" class="events-section">
      <div class="container">
        <div class="section-divider">
          <span class="divider-pill divider-pill--upcoming">À venir</span>
        </div>
        <div class="cards-grid">
          <article
            v-for="event in upcomingFiltered"
            :key="event.id"
            class="ev-card ev-card--upcoming"
          >
            <div class="ev-img-wrap">
              <img v-if="event.image" :src="event.image" :alt="event.title" class="ev-img">
              <div v-else class="ev-img-placeholder">
                <span class="ev-img-icon">{{ categoryIcon(event.category) }}</span>
              </div>
              <span class="ev-ribbon">À venir</span>
              <span :class="['ev-cat-tag', `ev-cat-tag--${event.category}`]">{{ categoryLabel(event.category) }}</span>
            </div>
            <div class="ev-body">
              <div class="ev-date">{{ event.date }}</div>
              <h3 class="ev-title">{{ event.title }}</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {{ event.location }}
              </p>
              <p v-if="event.description" class="ev-desc">{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── Événements passés ── -->
    <section v-if="pastFiltered.length" class="events-section events-section--past">
      <div class="container">
        <div class="section-divider">
          <span class="divider-pill divider-pill--past">Déjà réalisés</span>
        </div>
        <div class="cards-grid">
          <article
            v-for="event in pastFiltered"
            :key="event.id"
            class="ev-card ev-card--past"
          >
            <div class="ev-img-wrap">
              <img v-if="event.image" :src="event.image" :alt="event.title" class="ev-img ev-img--past">
              <div v-else class="ev-img-placeholder ev-img-placeholder--past">
                <span class="ev-img-icon">{{ categoryIcon(event.category) }}</span>
              </div>
              <span :class="['ev-cat-tag', `ev-cat-tag--${event.category}`]">{{ categoryLabel(event.category) }}</span>
            </div>
            <div class="ev-body">
              <div class="ev-date ev-date--past">{{ event.date }}</div>
              <h3 class="ev-title">{{ event.title }}</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {{ event.location }}
              </p>
              <p v-if="event.description" class="ev-desc">{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── Empty state ── -->
    <section v-if="filteredAll.length === 0" class="empty-state">
      <div class="container">
        <p class="empty-text">Aucun événement dans cette catégorie.</p>
        <button class="btn btn-primary" @click="activeFilter = 'all'">Voir tout</button>
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
          <router-link to="/contact" class="btn btn-outline-white">Nous contacter</router-link>
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
      timer: null,
      departDate: new Date("2026-04-30T00:00:00"),
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },

      filters: [
        { key: "all",             label: "Tous" },
        { key: "sport",           label: "Sport" },
        { key: "culture",         label: "Culture" },
        { key: "caritatif",       label: "Caritatif" },
        { key: "sensibilisation", label: "Sensibilisation" },
      ],

      events: [
        {
          id: 8,
          endDate: "2026-04-29",
          category: "caritatif",
          title: "Récolte de dons humanitaires",
          date: "5 mars → 29 avril 2026",
          location: "Garage DG Automobiles & CT NORISKO, Meyzieu",
          description: "Collecte en cours de fournitures scolaires, vêtements et matériel médical destinés aux trois écoles marocaines visitées lors du rallye.",
          image: "/collecte-dons.jpg",
        },
        {
          id: 9,
          endDate: "2026-04-27",
          category: "sensibilisation",
          title: "Soirée de pré-départ",
          date: "27 avril 2026",
          location: "Garage DG Automobiles, Meyzieu",
          description: "Dernier rassemblement avant le grand départ — un moment de partage avec les proches, partenaires et tous les soutiens de l'association.",
          image: "/soiree-predepart.jpg",
        },
        {
          id: 12,
          endDate: "2026-05-31",
          category: "sensibilisation",
          title: "Retour du Rallye",
          date: "Date à confirmer — mai 2026",
          location: "Meyzieu",
          description: "Soirée de retour pour raconter l'aventure, présenter les collectes réalisées et remercier tous ceux qui ont rendu ce projet possible. Et surtout commencer a évoquer les futurs projets de D'un Pas a l'autre.",
          image: null,
        },
        {
          id: 13,
          endDate: "2026-06-29",
          category: "sport",
          title: "Événement Paratennis — équipe de Meyzieu",
          date: "29 juin 2026 (a confirmer)",
          location: "Meyzieu",
          description: "Nouveau temps fort autour du paratennis.",
          image: null,
        },

        {
          id: 7,
          endDate: "2026-03-26",
          category: "sensibilisation",
          title: "Sensibilisation auprès des élèves de primaire",
          date: "26 mars 2026",
          location: "École primaire de Jonage",
          description: "Maëva s'est rendu dans son ancienne école priamire afin d'intervenir auprès des élèves pour échanger autour du handicap et de l'inclusion. Les enfants ont réalisé de magnifiques dessins pour soutenir Maëva dans cette aventure.",
          image: "/sensibilisation-ecoliers.jpg",
        },
        {
          id: 6,
          endDate: "2026-03-21",
          category: "caritatif",
          title: "Soirée caritative au Loft",
          date: "21 mars 2026",
          location: "Discothèque le Loft, Saint-Quentin-la-Poterie",
          description: "Soirée au profit de l'association pour financer le rallye et les collectes humanitaires au Maroc.",
          image: "/Les205AuLoft.png",
        },
        {
          id: 5,
          endDate: "2026-03-13",
          category: "sport",
          title: "Découverte du Paratennis",
          date: "13 mars 2026",
          location: "139 rue de la République, Meyzieu",
          description: "Initiation au tennis en fauteuil roulant, ouverte à tous — valides et personnes en situation de handicap — pour vivre le sport autrement.",
          image: "/paratennis.jpg",
        },
        {
          id: 4,
          endDate: "2026-02-08",
          category: "culture",
          title: "Grand Loto du Tennis Club de Meyzieu",
          date: "8 février 2026",
          location: "Espace Jean Poperen, Meyzieu",
          description: "Participation au loto du club de tennis, l'occasion de se faire connaître et de tisser des liens avec les associations locales.",
          image: "/Loto.jpg",
        },
        {
          id: 3,
          endDate: "2026-01-26",
          category: "sensibilisation",
          title: "Soirée de présentation — association & 205 Trophée",
          date: "26 janvier 2026",
          location: "Garage DG Automobiles, Meyzieu",
          description: "Présentation officielle de l'association, découverte des voitures 205 engagées dans le rallye et apéro dinatoire.",
          image: "/soiree-presentation.jpeg",
        },
        {
          id: 2,
          endDate: "2026-01-18",
          category: "sport",
          title: "Présence au match de rugby US Meyzieu",
          date: "18 janvier 2026",
          location: "Stade des Servizières, Meyzieu",
          description: "L'association était présente au match US Meyzieu vs SC Couches pour rencontrer le public et sensibiliser les supporters à son histoire et ses projets. En particulier son premier défi : le 205 Trophée.",
          image: "/rugby-meyzieu.png",
        },
        {
          id: 1,
          endDate: "2025-10-01",
          category: "sensibilisation",
          title: "Lancement de l'association",
          date: "1er octobre 2025",
          location: "Garage DG Automobiles, Meyzieu",
          description: "Naissance officielle de D'un Pas à l'Autre, entourée des premiers membres, bénévoles et partenaires qui ont cru au projet dès le début.",
          image: "/lancement-asso.jpg",
        },
      ],
    };
  },

  computed: {
    today() {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    },
    filteredAll() {
      if (this.activeFilter === 'all') return this.events;
      return this.events.filter(e => e.category === this.activeFilter);
    },
    upcomingFiltered() {
      return this.filteredAll.filter(e => new Date(e.endDate) >= this.today);
    },
    pastFiltered() {
      return this.filteredAll.filter(e => new Date(e.endDate) < this.today);
    },
    isRallyeUpcoming() {
      return new Date('2026-05-13') >= this.today;
    },
  },

  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },

  methods: {
    updateCountdown() {
      const diff = this.departDate - new Date();
      if (diff <= 0) {
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        clearInterval(this.timer);
        return;
      }
      this.timeLeft = {
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    },
    countByFilter(key) {
      if (key === "all") return this.events.length;
      return this.events.filter(e => e.category === key).length;
    },
    categoryLabel(cat) {
      return { sport: "Sport", culture: "Culture", caritatif: "Caritatif", sensibilisation: "Sensibilisation" }[cat] || cat;
    },
    categoryIcon(cat) {
      return { sport: "🏃", culture: "🎭", caritatif: "❤️", sensibilisation: "💬" }[cat] || "📅";
    },
  },
};
</script>

<style scoped>
/* ── Hero page ── */
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
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  color: #fecdd3; margin-bottom: 0.6rem;
}
.hero-lead { font-size: 1.05rem; opacity: .88; margin-top: .5rem; max-width: 520px; line-height: 1.65; }

/* ── Toolbar ── */
.toolbar-section {
  background: var(--bg-white);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
  position: sticky; top: 72px; z-index: 8;
}
.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.filters { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: var(--radius-pill);
  border: 1px solid var(--border); background: var(--bg-white);
  font-family: var(--font-heading); font-size: 0.85rem; font-weight: 600;
  color: var(--text-soft); cursor: pointer; transition: all .15s;
}
.filter-btn:hover  { border-color: var(--blue); color: var(--blue); }
.filter-btn.active { background: var(--blue); border-color: var(--blue); color: var(--bg-white); }
.filter-count {
  font-size: 0.72rem; font-weight: 700;
  background: rgba(0,0,0,.1); padding: 1px 6px; border-radius: var(--radius-pill);
}
.filter-btn.active .filter-count { background: rgba(255,255,255,.2); }
.toolbar-stats { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; }

/* ── Section divider ── */
.section-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
.section-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.divider-pill {
  font-family: var(--font-heading); font-size: 0.78rem; font-weight: 700;
  letter-spacing: .08em; text-transform: uppercase;
  padding: 5px 14px; border-radius: var(--radius-pill); white-space: nowrap;
}
.divider-pill--upcoming { background: #ffe4e6; color: #be123c; border: 1px solid #ffd5d8; }
.divider-pill--past     { background: var(--bg-light); color: var(--text-muted); border: 1px solid var(--border); }

/* ── Hero event card (départ + rallye) ── */
.hero-event-section { padding: 56px 0 0; }

.hero-event-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid #ffd5d8;
  box-shadow: 0 16px 48px rgba(4,17,57,.1);
}

.hero-event-img {
  position: relative;
  min-height: 420px;
}
.hero-event-img img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.hero-event-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right, transparent 60%, rgba(8,29,88,.15));
}

.hero-event-body {
  background: var(--bg-white);
  padding: 36px 32px;
  display: flex; flex-direction: column; gap: 20px;
}

.hero-event-meta { display: flex; align-items: center; gap: 10px; }

.ev-cat-tag--inline {
  font-family: var(--font-heading); font-size: 0.72rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .06em;
  padding: 4px 12px; border-radius: var(--radius-pill);
}
.ev-ribbon-inline {
  font-family: var(--font-heading); font-size: 0.72rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .06em;
  background: var(--red); color: var(--bg-white);
  padding: 4px 12px; border-radius: var(--radius-pill);
}

.hero-event-title {
  font-family: var(--font-heading);
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 800; color: var(--blue-dark);
  line-height: 1.2; margin: 0;
  text-align: left;
}

.hero-event-dates {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  background: var(--bg-subtle); border-radius: var(--radius-md); padding: 14px 16px;
}
.date-milestone { text-align: center; }
.date-milestone-label { font-size: 0.68rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 3px; }
.date-milestone-value { font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--blue-dark); }
.date-milestone-arrow { font-size: 1.1rem; color: var(--text-muted); }

.hero-event-desc { font-size: 0.9rem; color: var(--text-soft); line-height: 1.7; margin: 0; }

.hero-event-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
}
.hero-stat {
  text-align: center; background: var(--bg-subtle);
  border-radius: var(--radius-sm); padding: 10px 6px;
}
.hero-stat strong {
  display: block; font-family: var(--font-heading);
  font-size: 1.1rem; font-weight: 800; color: var(--red);
}
.hero-stat span { font-size: 0.72rem; color: var(--text-muted); }

/* Compte à rebours mini */
.countdown-mini {
  background: linear-gradient(120deg, var(--blue-dark), var(--blue));
  border-radius: var(--radius-md); padding: 16px 20px;
}
.countdown-mini-label {
  font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .1em;
  color: rgba(255,255,255,.65); margin-bottom: 10px;
}
.countdown-mini-boxes { display: flex; gap: 8px; }
.cbox {
  flex: 1; text-align: center; background: rgba(255,255,255,.1);
  border-radius: var(--radius-sm); padding: 10px 4px;
}
.cbox strong {
  display: block; font-family: var(--font-heading);
  font-size: 1.6rem; font-weight: 800; color: var(--bg-white); line-height: 1;
}
.cbox span { font-size: 0.68rem; color: rgba(255,255,255,.6); text-transform: uppercase; }

/* ── Sections events ── */
.events-section       { padding: 40px 0 0; }
.events-section--past { padding: 40px 0 56px; }

/* ── Grille ── */
.cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

/* ── Card ── */
.ev-card {
  background: var(--bg-white); border-radius: var(--radius-lg);
  overflow: hidden; border: 1px solid var(--border);
  transition: transform .2s, box-shadow .2s;
  display: flex; flex-direction: column;
}
.ev-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(4,17,57,.1); }
.ev-card--upcoming { border-color: #ffd5d8; }
.ev-card--past     { opacity: .92; }

.ev-img-wrap { position: relative; overflow: hidden; height: 180px; background: var(--bg-light); }
.ev-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s; }
.ev-card:hover .ev-img { transform: scale(1.04); }
.ev-img--past { filter: grayscale(20%); }
.ev-img-placeholder { width: 100%; height: 100%; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; }
.ev-img-placeholder--past { background: var(--bg-light); }
.ev-img-icon { font-size: 2.5rem; }

.ev-ribbon {
  position: absolute; top: 10px; left: 10px;
  font-family: var(--font-heading); font-size: 0.68rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .08em;
  background: var(--red); color: var(--bg-white);
  padding: 4px 10px; border-radius: var(--radius-pill);
}
.ev-cat-tag {
  position: absolute; bottom: 10px; right: 10px;
  font-family: var(--font-heading); font-size: 0.68rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .06em;
  padding: 3px 9px; border-radius: var(--radius-pill);
}
.ev-cat-tag--sport           { background: #e8eefc; color: #0d2c80; }
.ev-cat-tag--culture         { background: #ffe4e6; color: #be123c; }
.ev-cat-tag--caritatif       { background: #e1f5ee; color: #0f6e56; }
.ev-cat-tag--sensibilisation { background: #faeeda; color: #854f0b; }

.ev-body { padding: 1rem 1.1rem 1.2rem; flex: 1; display: flex; flex-direction: column; }
.ev-date       { font-family: var(--font-heading); font-size: 0.78rem; font-weight: 700; color: var(--red); margin-bottom: 5px; }
.ev-date--past { color: var(--text-muted); }
.ev-title      { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--blue-dark); line-height: 1.3; margin: 0 0 8px; }
.ev-location   { display: flex; align-items: flex-start; gap: 4px; font-size: 0.82rem; color: var(--text-muted); margin: 0 0 8px; line-height: 1.4; }
.ev-location svg { flex-shrink: 0; margin-top: 2px; }
.ev-desc       { font-size: 0.85rem; color: var(--text-soft); line-height: 1.6; margin: 0; flex: 1; }

/* ── Empty ── */
.empty-state { padding: 80px 0; text-align: center; }
.empty-text  { font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem; }

/* ── CTA ── */
.cta-section {
  background: linear-gradient(120deg, rgba(8,29,88,.97), rgba(13,44,128,.9));
  padding: 64px 0; margin-top: 56px;
}
.cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.cta-inner h2 { color: var(--bg-white); text-align: left; margin-bottom: 0.5rem; }
.cta-inner p  { color: rgba(255,255,255,.75); font-size: 1rem; margin: 0; }
.cta-actions  { display: flex; gap: 0.8rem; flex-wrap: wrap; flex-shrink: 0; }
.btn-outline-white {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill); font-family: var(--font-heading);
  font-size: 0.95rem; font-weight: 700; padding: 0.75rem 1.4rem;
  text-decoration: none; background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.3); color: var(--bg-white);
  transition: background .15s;
}
.btn-outline-white:hover { background: rgba(255,255,255,.22); }

/* ── Responsive ── */
@media (max-width: 1000px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-event-stats { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 800px) {
  .hero-event-card { grid-template-columns: 1fr; }
  .hero-event-img  { min-height: 240px; }
  .hero-event-body { padding: 24px 20px; }
}
@media (max-width: 700px) {
  .cards-grid  { grid-template-columns: 1fr; }
  .toolbar     { flex-direction: column; align-items: flex-start; }
  .cta-inner   { flex-direction: column; }
  .cta-inner h2 { text-align: center; }
  .cta-actions { justify-content: center; width: 100%; }
  .hero-event-dates { flex-direction: column; align-items: flex-start; gap: 6px; }
  .date-milestone-arrow { transform: rotate(90deg); }
  .countdown-mini-boxes .cbox strong { font-size: 1.3rem; }
}
</style>