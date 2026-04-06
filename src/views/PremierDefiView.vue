<template>
  <div class="defi">

    <section class="hero-defi">
      <div class="hero-defi-overlay">
        <div class="container hero-defi-content">
          <h1>Notre premier défi</h1>
          <p>
            Une aventure sportive, humaine et solidaire à travers
            le 205 Trophée.
          </p>
        </div>
      </div>
    </section>

    <section class="story">
      <div class="container story-grid">

        <div class="story-text">
          <h2 class="story-heading">Une aventure inspirée par Maëva</h2>
          <p>
            Pour lancer l'aventure de l'association, nous avons choisi de relever
            un premier défi symbolique : participer à un rallye à la fois
            <strong>sportif et solidaire</strong>, inscrit dans une démarche
            profondément <strong>humaine et inclusive</strong>.
          </p>
          <p>Ce projet trouve son origine dans l'histoire de <strong>Maëva</strong>.</p>
          <p>
            Avant son accident, Maëva aimait découvrir de nouvelles disciplines
            et se fixer des défis. Elle suivait également un
            <strong>BTS en mécanique</strong>, portée par sa passion pour
            l'univers automobile.
          </p>
          <p>
            Pour réunir ses passions, son parcours et les valeurs que nous
            souhaitons porter à travers l'association,
            <strong>le 205 Trophée</strong> s'est imposé comme une évidence.
          </p>
        </div>

        <div class="story-image">
          <img src="/Mae.jpg" alt="Maëva, inspiration du projet">
        </div>

      </div>
    </section>

    <!-- Stats globales -->
    <section class="stats">
      <div class="container stats-grid">
        <div><strong>3 000 km</strong><span>de parcours</span></div>
        <div><strong>9</strong><span>jours de traversée</span></div>
        <div><strong>205</strong><span>équipages</span></div>
        <div><strong>1</strong><span>aventure solidaire</span></div>
      </div>
    </section>

    <section class="partners">
      <div class="container partners-grid">

        <div class="partners-info">
          <h2 class="story-heading">En savoir plus sur le 205 Trophée</h2>
          <p>
            Le <strong>205 Trophée</strong> est un rallye solidaire et sportif
            réunissant des équipages autour d'une aventure humaine unique.
          </p>
          <p>Pour découvrir l'événement en détail :</p>
          <a href="https://www.205trophee.com" target="_blank" class="btn btn-primary">
            Visiter le site officiel
          </a>
          <h3>Soutenir notre projet</h3>
          <p>
            Entreprises, partenaires ou particuliers peuvent nous aider
            à participer à cette aventure. Retrouvez toutes les informations
            dans notre dossier de sponsoring.
          </p>
        </div>

        <div class="sponsor-card">
          <a href="/documents/dossier-sponsoring.pdf" download class="pdf-card">
            <img src="/documents/sponsoring-preview.jpg" alt="Aperçu du dossier de sponsoring">
            <div class="pdf-overlay">
              <span>📄 Télécharger le dossier</span>
            </div>
          </a>
        </div>

      </div>
    </section>

    <section class="countdown">
      <div class="container">
        <h2>Départ dans</h2>
        <div class="countdown-grid">
          <div class="time-box"><strong>{{ timeLeft.days }}</strong><span>Jours</span></div>
          <div class="time-box"><strong>{{ timeLeft.hours }}</strong><span>Heures</span></div>
          <div class="time-box"><strong>{{ timeLeft.minutes }}</strong><span>Minutes</span></div>
          <div class="time-box"><strong>{{ timeLeft.seconds }}</strong><span>Secondes</span></div>
        </div>
      </div>
    </section>

    <!-- Carte GPS temps réel -->
    <RallyeMap />

    <!-- ── YouTube ── -->
    <section class="youtube-section">
      <div class="container">

        <div class="section-header">
          <div>
            <span class="section-tag">En direct du rallye</span>
            <h2 class="left-heading">Nos vidéos du raid</h2>
            <p class="section-lead">
              Chaque jour sur la route, l'équipage partage son aventure.
              Retrouvez tous les épisodes ci-dessous ou directement sur notre chaîne.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@Dunpasalautre"
            target="_blank"
            class="btn-youtube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Voir la chaîne complète
          </a>
        </div>

        <!-- Lecteur 16:9 responsive — playlist uploads de la chaîne (toutes les vidéos, mises à jour automatiquement) -->
        <div class="youtube-player">
          <iframe
            src="https://www.youtube.com/embed/Lz_dM16bMs8?list=UUFeOu92TusxZstcavNwhaCA&rel=0&modestbranding=1"
            title="Vidéos D'un Pas à l'autre — Rallye 205 Trophée"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

      </div>
    </section>

    <!-- ── HelloAsso — cagnotte ── -->
    <section class="helloasso-section">
      <div class="container">

        <div class="section-header">
          <div>
            <span class="section-tag">Nous soutenir</span>
            <h2 class="left-heading">Faites un don</h2>
            <p class="section-lead">
              Chaque contribution nous aide à financer le raid, le matériel
              et les collectes humanitaires au Maroc.
            </p>
          </div>
        </div>

        <div class="helloasso-wrapper">
          <iframe
            id="haWidget"
            allowtransparency="true"
            scrolling="auto"
            src="https://www.helloasso.com/associations/d-un-pas-a-l-autre/formulaires/1/widget"
            title="Formulaire de don — D'un Pas à l'autre"
          ></iframe>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import RallyeMap from "./RallyeMap.vue";
export default {
  components: { RallyeMap },
  data() {
    return {
      targetDate: new Date("2026-05-03T00:00:00"),
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      timer: null,
    };
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
    // Redimensionnement automatique HelloAsso
    window.addEventListener("message", this.onHelloAssoMessage);
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("message", this.onHelloAssoMessage);
  },
  methods: {
    updateCountdown() {
      const diff = this.targetDate - new Date();
      if (diff <= 0) { clearInterval(this.timer); return; }
      this.timeLeft = {
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    },
    onHelloAssoMessage(e) {
      if (!e.data?.height) return;
      const el = document.getElementById("haWidget");
      if (el && e.data.height > 0) {
        el.style.height = e.data.height + "px";
      }
    },
  },
};
</script>

<style scoped>
/* ── Hero ── */
.hero-defi {
  height: 500px;
  background-image: url("/Les205.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.hero-defi-overlay {
  background: rgba(0,0,0,0.55);
  height: 100%;
  display: flex;
  align-items: center;
}
.hero-defi-content { color: var(--bg-white); text-align: center; }
.hero-defi-content h1 { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem; }
.hero-defi-content p  { font-size: 1.1rem; opacity: .9; }

/* ── Story ── */
.story { padding: 80px 0; }
.story-heading { text-align: left; color: var(--blue-dark); margin-bottom: 1.2rem; }
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}
.story-text p { color: var(--text-soft); margin-bottom: 1rem; line-height: 1.7; }
.story-image img { max-width: 380px; width: 100%; margin: auto; border-radius: var(--radius-md); }

/* ── Partners ── */
.partners { padding: 80px 0; }
.partners-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
}
.partners-info h3 { color: var(--blue-dark); margin: 1.8rem 0 0.8rem; }
.partners-info p  { color: var(--text-soft); margin-bottom: 1rem; line-height: 1.65; }
.sponsor-card { max-width: 280px; width: 100%; margin: auto; }
.pdf-card {
  position: relative;
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform .2s;
}
.pdf-card:hover { transform: translateY(-3px); }
.pdf-card img   { width: 100%; height: auto; }
.pdf-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,29,88,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .2s;
}
.pdf-card:hover .pdf-overlay { opacity: 1; }
.pdf-overlay span { color: var(--bg-white); font-family: var(--font-heading); font-weight: 700; font-size: .95rem; }

/* ── Countdown ── */
.countdown { padding: 70px 0; text-align: center; background: var(--bg-subtle); }
.countdown-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
.time-box { background: var(--bg-white); padding: 1.5rem 1rem; border-radius: var(--radius-md); box-shadow: var(--shadow-card); }
.time-box strong { font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; color: var(--red); display: block; line-height: 1; }
.time-box span   { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.4rem; display: block; }

/* ── En-têtes de section ── */
.section-tag {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--red);
  border: 1px solid var(--red);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  margin-bottom: 12px;
}
.left-heading { text-align: left; color: var(--blue-dark); margin-bottom: 0.6rem; }
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.section-lead { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; max-width: 540px; margin: 0; }

/* ── YouTube ── */
.youtube-section { padding: 80px 0; background: var(--bg-white); }

.btn-youtube {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ff0000;
  color: white;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background .15s, transform .1s;
}
.btn-youtube:hover  { background: #cc0000; }
.btn-youtube:active { transform: scale(.98); }

/* Ratio 16:9 responsive */
.youtube-player {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-map);
}
.youtube-player iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* ── HelloAsso ── */
.helloasso-section { padding: 80px 0; background: var(--bg-subtle); }

.helloasso-wrapper {
  max-width: 680px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  background: var(--bg-white);
  border: 1px solid var(--border);
}
.helloasso-wrapper iframe {
  display: block;
  width: 100%;
  height: 750px;
  border: none;
  transition: height .3s ease;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .story-grid,
  .partners-grid  { grid-template-columns: 1fr; }
  .countdown-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-defi      { height: 360px; }
  .story-heading  { text-align: center; }
  .section-header { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 500px) {
  .countdown-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>