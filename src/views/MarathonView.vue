<template>
  <div class="marathon-page">

    <!-- Hero -->
    <section class="marathon-hero">
      <div class="marathon-hero-content">
        <span class="marathon-tag">Défi en cours</span>
        <h1>Réaliser un Marathon en 2027</h1>
        <p class="marathon-lead">
          Après le Maroc, un nouveau défi hors du commun : Maëva s'apprête à courir un marathon en 2027,
          avec sa prothèse de jambe. 42,195 km pour prouver que rien n'est impossible.
        </p>
      </div>
      <div class="marathon-hero-icon">🏃‍♀️</div>
    </section>

    <!-- Étapes -->
    <section class="marathon-steps-section">
      <h2>Les étapes du défi</h2>
      <p class="steps-intro">
        Voici le chemin que Maëva est en train de tracer, une étape à la fois.
      </p>

      <div class="steps-timeline">

        <!-- Étape 1 : Prothèse -->
        <div class="step done">
          <div class="step-icon">✅</div>
          <div class="step-content">
            <h3>Maëva obtient une prothèse de jambe</h3>
            <p>
              Première condition indispensable : être équipée d'une prothèse adaptée à la marche,
              pour pouvoir envisager de courir. Cette étape fut longue et remplie d'incertitude mais a fini par être franchie !
            </p>
          </div>
          <img
            src="/mae-prothese.jpg"
            alt="Maëva debout avec sa prothèse de jambe devant la voiture du rallye"
            class="step-photo"
            loading="lazy"
          />
        </div>

        <div class="step-connector done-line"></div>

        <!-- Étape 2 : Entraînement + Foulées de Jonage -->
        <div class="step in-progress">
          <div class="step-icon">🔄</div>
          <div class="step-content">
            <h3>S'entraîner à marcher puis courir</h3>
            <p>
              Maëva reprend progressivement l'activité physique avec sa prothèse.
              Premier objectif : les 5 km des <strong>Foulées de Jonage</strong>, le <strong>11 octobre 2026</strong>.
              L'équipe de l'association et des volontaires courront à ses côtés, au profit du
              <strong>Centre Léon Bérard</strong> et d'<strong>Imagine for Margo — Children Without Cancer</strong>.
            </p>
            <a
              :href="jonageEventUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="step-banner"
            >
              <img
                src="/foullee-jonage-2026.jpg"
                alt="Affiche des Foulées de Jonage, courses solidaires du dimanche 11 octobre"
                loading="lazy"
              />
            </a>
            <a
              :href="jonageEventUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="step-event step-event-link"
            >
              📍 Foulées de Jonage — 11 octobre 2026 →
            </a>
          </div>
        </div>

        <div class="step-connector ongoing-line"></div>

        <!-- Étape 3 : Lame de course -->
        <div class="step upcoming">
          <div class="step-icon">🦾</div>
          <div class="step-content">
            <h3>Acquérir une lame de course</h3>
            <p>
              Pour courir un marathon, Maëva aura besoin d'une lame de course spécifique,
              différente de sa prothèse de marche quotidienne. Une acquisition en cours de préparation.
            </p>
          </div>
        </div>

        <div class="step-connector dashed-line"></div>

        <!-- Étape 4 : Semi-marathon de Maranello -->
        <div class="step upcoming">
          <div class="step-icon">🏎️</div>
          <div class="step-content">
            <h3>Semi-marathon de Maranello</h3>
            <p>
              Sur le légendaire circuit Ferrari, Maëva prendra le départ du semi-marathon de Maranello —
              21 km sur l'une des pistes les plus mythiques du monde, pour tester sa préparation avant
              le grand jour.
            </p>
            <figure class="step-figure">
              <a
                :href="maranelloEventUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="step-banner"
              >
                <img
                  src="/maranello-fiorano.jpg"
                  alt="Entrée de la Pista di Fiorano, le circuit Ferrari à Maranello"
                  class="banner-wide"
                  loading="lazy"
                />
              </a>
              <figcaption class="photo-credit">
                Photo :
                <a href="https://www.flickr.com/photos/nimame/36331712583/" target="_blank" rel="noopener noreferrer">nimame</a>,
                <a href="https://creativecommons.org/licenses/by/2.0/deed.fr" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>,
                via <a href="https://commons.wikimedia.org/wiki/File:%E3%83%95%E3%82%A3%E3%82%AA%E3%83%A9%E3%83%8E%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88_(36331712583).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
              </figcaption>
            </figure>
            <a
              :href="maranelloEventUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="step-event step-event-link"
            >
              📍 Maranello (Italie) — 12 au 14 mars 2027 →
            </a>
          </div>
        </div>

        <div class="step-connector dashed-line"></div>

        <!-- Objectif final -->
        <div class="step goal">
          <div class="step-icon">🎯</div>
          <div class="step-content">
            <h3>Le Marathon 2027</h3>
            <p>
              L'objectif : franchir la ligne d'arrivée d'un marathon en 2027, 42,195 km
              avec sa prothèse. La ville reste à confirmer — Paris ou Lyon — mais la détermination,
              elle, est déjà là.
            </p>
            <div class="step-event goal-event">
              🏁 Marathon — 2027
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Soutien -->
    <section class="marathon-support">
      <h2>Soutenez le défi</h2>
      <p>
        Ce défi demande de l'énergie, du temps et des équipements spécialisés.
        Chaque geste compte pour l'aider à franchir cette ligne d'arrivée.
      </p>
      <RouterLink to="/nous-aider" class="btn btn-primary">Nous aider →</RouterLink>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const jonageEventUrl =
  "https://www.facebook.com/p/Les-Foul%C3%A9es-de-Jonage-61574819205201/?locale=fr_FR";

const maranelloEventUrl =
  "https://mezzamaratonaditalia.it/en/";
</script>

<style scoped>
.marathon-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 60px 20px 80px;
}

/* ── Hero ── */
.marathon-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(135deg, #1a1a2e 0%, #3b3b6e 100%);
  border-radius: 20px;
  padding: 48px 40px;
  margin-bottom: 64px;
  color: #fff;
}

.marathon-hero-content {
  flex: 1;
}

.marathon-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  color: #fde68a;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 99px;
  margin-bottom: 16px;
}

.marathon-hero h1 {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
  color: #fff;
}

.marathon-lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  max-width: 520px;
}

.marathon-hero-icon {
  font-size: 5rem;
  flex-shrink: 0;
}

/* ── Section étapes ── */
.marathon-steps-section {
  margin-bottom: 64px;
}

.marathon-steps-section h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.steps-intro {
  color: #4b5563;
  font-size: 1rem;
  margin-bottom: 40px;
}

/* ── Timeline ── */
.steps-timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 24px;
  border-radius: 14px;
  width: 100%;
  background: #f9fafb;
  border-left: 4px solid transparent;
  transition: transform 0.2s ease;
}

.step:hover {
  transform: translateX(4px);
}

.step.done {
  border-left-color: #10b981;
  background: #f0fdf4;
}

.step.in-progress {
  border-left-color: #f59e0b;
  background: #fffbeb;
}

.step.upcoming {
  border-left-color: #6366f1;
  background: #eef2ff;
}

.step.future {
  border-left-color: #d1d5db;
  background: #f9fafb;
  opacity: 0.75;
}

.step.goal {
  border-left-color: #ef4444;
  background: #fff5f5;
}

.step-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.step-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.step-content {
  flex: 1;
}

.step-photo {
  width: 160px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 30%; /* recadre sur Maëva, sans le bitume */
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-content p {
  font-size: 0.93rem;
  color: #4b5563;
  line-height: 1.65;
  margin: 0;
}

.step-event {
  margin-top: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
  padding: 4px 12px;
  border-radius: 99px;
}

.step-event-link {
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.step-event-link:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #1a1a2e;
}

.step-banner {
  display: block;
  max-width: 440px;
  margin-top: 14px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step-banner:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.step-banner img {
  display: block;
  width: 100%;
  height: auto;
}

.step-figure {
  margin: 0 0 10px;
}

.step-banner img.banner-wide {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.photo-credit {
  margin-top: 6px;
  font-size: 0.72rem;
  color: #9ca3af;
}

.photo-credit a {
  color: inherit;
}

.goal-event {
  color: #b91c1c;
  background: #fee2e2;
}

/* ── Connecteurs ── */
.step-connector {
  width: 4px;
  height: 28px;
  margin-left: 38px; /* aligne avec le bord gauche de l'icône */
  border-radius: 2px;
}

.done-line     { background: #10b981; }
.ongoing-line  { background: #f59e0b; }
.dashed-line {
  background: repeating-linear-gradient(
    to bottom,
    #d1d5db 0px,
    #d1d5db 6px,
    transparent 6px,
    transparent 12px
  );
}

/* ── Section soutien ── */
.marathon-support {
  text-align: center;
  background: #f3f4f6;
  border-radius: 16px;
  padding: 48px 32px;
}

.marathon-support h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.marathon-support p {
  color: #4b5563;
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto 24px;
  line-height: 1.7;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .marathon-hero {
    flex-direction: column;
    padding: 32px 24px;
    text-align: center;
  }

  .marathon-hero h1 { font-size: 1.8rem; }
  .marathon-hero-icon { font-size: 3.5rem; }
  .marathon-lead { font-size: 0.97rem; }

  .step { padding: 16px; flex-wrap: wrap; }
  .step-photo {
    width: 100%;
    max-width: 240px;
    margin-left: calc(1.6rem + 20px); /* aligné avec le texte, après l'icône */
  }
  .step-connector { margin-left: 30px; }
}
</style>