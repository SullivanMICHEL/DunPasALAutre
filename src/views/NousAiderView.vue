<template>
  <div class="nous-aider">

    <!-- ── Hero ── -->
    <section class="hero-aider">
      <div class="container hero-aider-inner">
        <p class="kicker">Solidarité · Engagement · Impact</p>
        <h1>Soutenir D'un Pas à l'Autre</h1>
        <p class="hero-lead">
          Chaque geste compte. Voici les différentes façons dont vous pouvez
          nous aider à réaliser nos projets.
        </p>
      </div>
    </section>

    <!-- ── Soutiens permanents ── -->
    <section class="support-section">
      <div class="container">
        <span class="section-tag center">Soutiens permanents</span>
        <h2>Agir pour l'association</h2>
        <p class="subtitle">
          Ces cagnottes soutiennent l'association sur la durée et permettent
          de financer nos projets actuels et futurs.
        </p>

        <div class="support-grid">

          <!-- Don général -->
          <div class="support-card">
            <div class="support-card-header">
              <div class="support-icon support-icon--red">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <h3>Faire un don</h3>
                <p class="card-desc">
                  Votre don soutient directement l'association pour ses projets
                  actuels et futurs — événements, matériel, logistique.
                </p>
              </div>
            </div>
            <iframe
              id="haWidget-don"
              allowtransparency="true"
              scrolling="auto"
              src="https://www.helloasso.com/associations/d-un-pas-a-l-autre/formulaires/2/widget"
              style="width: 100%; height: 750px; border: none;"
              title="Faire un don à D'un Pas à l'Autre"
              :onload="resizeWidget('haWidget-don')"
            ></iframe>
          </div>

          <!-- Adhésion -->
          <div class="support-card">
            <div class="support-card-header">
              <div class="support-icon support-icon--navy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3>Devenir membre</h3>
                <p class="card-desc">
                  Rejoignez officiellement l'association et faites partie
                  de l'aventure D'un Pas à l'Autre.
                </p>
              </div>
            </div>
            <iframe
              id="haWidget-adhesion"
              allowtransparency="true"
              scrolling="auto"
              src="https://www.helloasso.com/associations/d-un-pas-a-l-autre/adhesions/devenir-membre/widget"
              style="width: 100%; height: 750px; border: none;"
              title="Adhérer à D'un Pas à l'Autre"
              :onload="resizeWidget('haWidget-adhesion')"
            ></iframe>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Campagnes temporaires ── -->
    <section class="support-section support-section--alt">
      <div class="container">
        <span class="section-tag center section-tag--temp">Campagnes en cours</span>
        <h2>Actions temporaires</h2>
        <p class="subtitle">
          Ces campagnes sont liées à nos projets du moment. Elles sont limitées
          dans le temps, alors n'hésitez pas !
        </p>

        <div class="support-grid">

          <!-- 205 Trophée — participation -->
          <div class="support-card support-card--temp">
            <span class="temp-badge">Limité</span>
            <div class="support-card-header">
              <div class="support-icon support-icon--red">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <div>
                <h3>Participation au 205 Trophée</h3>
                <p class="card-desc">
                  Aidez-nous à financer notre participation au rallye des 205
                  et à réaliser ce défi unique aux côtés de Maëva.
                </p>
              </div>
            </div>
            <iframe
              id="haWidget-205"
              allowtransparency="true"
              scrolling="auto"
              src="https://www.helloasso.com/associations/d-un-pas-a-l-autre/formulaires/1/widget"
              style="width: 100%; height: 750px; border: none;"
              title="Participation au 205 Trophée — D'un Pas à l'Autre"
              :onload="resizeWidget('haWidget-205')"
            ></iframe>
          </div>

          <!-- T-shirts 205 Trophée -->
          <div class="support-card support-card--temp">
            <span class="temp-badge">Limité</span>
            <div class="support-card-header">
              <div class="support-icon support-icon--navy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <path d="M16 3c0 1.1-.9 2-2 2h-4C8.9 5 8 4.1 8 3H3L1 9h3v12h16V9h3L21 3h-5zm2 16H6V9h12v10z"/>
                </svg>
              </div>
              <div>
                <h3>T-shirts édition 205 Trophée</h3>
                <p class="card-desc">
                  Commandez votre t-shirt collector et soutenez l'aventure.
                  Une édition limitée à ne pas manquer !
                </p>
              </div>
            </div>
            <iframe
              id="haWidget-tshirt"
              allowtransparency="true"
              scrolling="auto"
              src="https://www.helloasso.com/associations/d-un-pas-a-l-autre/boutiques/t-shirt/widget"
              style="width: 100%; height: 750px; border: none;"
              title="T-shirts D'un Pas à l'Autre — édition 205 Trophée"
              :onload="resizeWidget('haWidget-tshirt')"
            ></iframe>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
function resizeWidget(id) {
  return function () {
    window.addEventListener('message', function (e) {
      const dataHeight = e.data.height
      const el = document.getElementById(id)
      if (el && dataHeight > parseFloat(el.style.height || 0)) {
        el.style.height = dataHeight + 'px'
      }
    })
  }
}
</script>

<style scoped>
/* ── Hero ── */
.hero-aider {
  background:
    linear-gradient(120deg, rgba(8,29,88,.95), rgba(13,44,128,.82)),
    radial-gradient(circle at 75% 40%, rgba(233,52,69,.28), transparent 50%);
  color: var(--bg-white);
  padding: 96px 0 80px;
}

.hero-aider-inner { max-width: 700px; }

.kicker {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 1rem;
}

.hero-lead {
  font-size: 1.1rem;
  opacity: .88;
  margin-top: .6rem;
  max-width: 580px;
}

/* ── Sections ── */
.support-section { padding: 80px 0; }
.support-section--alt { background: var(--bg-subtle); }

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
  margin-bottom: 14px;
}

.section-tag.center {
  display: block;
  text-align: center;
  width: fit-content;
  margin: 0 auto 14px;
}

.section-tag--temp {
  color: var(--blue);
  border-color: var(--blue);
}

h2 {
  text-align: center;
  color: var(--blue-dark);
  margin-bottom: .6rem;
}

.subtitle {
  text-align: center;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
}

/* ── Grille des cartes ── */
.support-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

/* ── Carte ── */
.support-card {
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.8rem 1.8rem 1.2rem;
  box-shadow: var(--shadow-card);
  position: relative;
}

.support-card--temp {
  border-top: 3px solid var(--blue);
}

.support-card-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.support-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

.support-icon--red  { background: var(--icon-red-bg);  color: var(--red); }
.support-icon--navy { background: var(--icon-blue-bg); color: var(--blue); }

.support-card h3 {
  font-size: 1.1rem;
  color: var(--blue-dark);
  margin: 0 0 .4rem;
}

.card-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* ── Badge "Limité" ── */
.temp-badge {
  position: absolute;
  top: -1px;
  right: 1.2rem;
  background: var(--blue);
  color: var(--bg-white);
  font-family: var(--font-heading);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 0 0 var(--radius-pill) var(--radius-pill);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .support-grid { grid-template-columns: 1fr; }
  .hero-aider   { padding: 64px 0 56px; }
}
</style>
