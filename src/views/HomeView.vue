<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-content">
        <p class="kicker">Solidarité, Inclusion et Partage</p>
        <h1>Ensemble chaque pas compte</h1>
        <p>
          Des evènements sportifs et culturels inclusifs, ouverts a toutes et
          tous.
        </p>
        <div class="hero-actions">
          <router-link to="/notre-premier-defi" class="btn btn-primary">
            Notre premier défi !
          </router-link>
          <router-link to="/association" class="btn btn-secondary">
            Decouvrir l'association
          </router-link>
        </div>
      </div>
    </section>

    <section class="mission">
      <div class="container">
        <h2>Notre mission</h2>
        <p class="subtitle">
          Rendre acessible le sport et la culture a tous
        </p>
        <div class="features">
          <article>
            <div class="feature-icon feature-icon--red" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
            <h3>Inclusion</h3>
            <p>Créer des rencontres sans difference.</p>
          </article>
          <article>
            <div class="feature-icon feature-icon--navy" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
              >
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
            </div>
            <h3>Partage</h3>
            <p>Vivre des émotions ensemble.</p>
          </article>
          <article>
            <div class="feature-icon feature-icon--navy feature-icon--access">
              <img
                class="feature-icon-img"
                src="/icon-accessibilite-uniconlabs.png"
                alt=""
                width="44"
                height="44"
                loading="lazy"
              />
            </div>
            <h3>Accessibilité</h3>
            <p>Des évenements accessibles a tous.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="events">
      <div class="container">
        <div class="events-title">
          <h2>Exemples d'événements</h2>
          <router-link to="/evenements">Voir tout le calendrier</router-link>
        </div>

        <div class="ev-grid">

          <article class="ev-card">
            <div class="ev-img-wrap">
              <img src="/collecte-dons.jpg" alt="Récolte de dons humanitaires" class="ev-img">
              <span class="ev-cat-tag ev-cat-tag--caritatif">Caritatif</span>
            </div>
            <div class="ev-body">
              <h3 class="ev-title">Récolte de dons humanitaires</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Garage DG Automobiles & NORISKO, Meyzieu
              </p>
              <p class="ev-desc">Collecte de fournitures scolaires, vêtements et matériel médical destinés aux trois écoles marocaines visitées lors du rallye.</p>
            </div>
          </article>

          <article class="ev-card">
            <div class="ev-img-wrap">
              <img src="/sensibilisation-ecoliers.jpg" alt="Sensibilisation auprès des élèves" class="ev-img">
              <span class="ev-cat-tag ev-cat-tag--sensibilisation">Sensibilisation</span>
            </div>
            <div class="ev-body">
              <h3 class="ev-title">Sensibilisation auprès des élèves de primaire</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                École primaire de Jonage
              </p>
              <p class="ev-desc">Maëva s'est rendue dans son ancienne école pour échanger avec les élèves autour du handicap et de l'inclusion.</p>
            </div>
          </article>

          <article class="ev-card">
            <div class="ev-img-wrap">
              <img src="/paratennis.jpg" alt="Découverte du Paratennis" class="ev-img">
              <span class="ev-cat-tag ev-cat-tag--sport">Sport</span>
            </div>
            <div class="ev-body">
              <h3 class="ev-title">Découverte du Paratennis</h3>
              <p class="ev-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Meyzieu
              </p>
              <p class="ev-desc">Initiation au tennis en fauteuil roulant, ouverte à tous — valides et personnes en situation de handicap — pour vivre le sport autrement.</p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container stats-grid">
        <div><strong>6</strong><span>Evènements organisés</span></div>
        <div><strong>+ 200</strong><span>Personnes sensibilisés</span></div>
        <div><strong>9</strong><span>Bénévoles engagés dans l'aventure</span></div>
        <div><strong>2</strong><span>Villes partenaires</span></div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2>Leurs mots nous touchent</h2> 
        <div class="quotes">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMeyzieuRugby%2Fposts%2Fpfbid0GLiAdQFG7efyarR37NL3kVLvU2Jddvr3BYtiNc9L7FeYCmedyo7Wo2rGKYvu8NxWl&show_text=true&width=500" width="500" height="727" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fceline.berthet.52%2Fposts%2Fpfbid02q8peuHCswJzsFqTna7nWUL3PxF94tqUaUDaruDVQkwGNbadS45wrJmjmVTsAY1bEl&show_text=true&width=500" width="500" height="169" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <a
            href="https://mesinfos.fr/69330-meyzieu/a-meyzieu-maeva-salerno-transforme-son-accident-en-aventure-solidaire-vers-le-maroc-233022.html"
            target="_blank"
            rel="noopener"
            class="press-card"
          >
            <div class="press-card-header">
              <span class="press-badge">Presse</span>
              <span class="press-source">mesinfos.fr</span>
            </div>
            <p class="press-title">
              "À Meyzieu, Maëva Salerno transforme son accident en aventure solidaire vers le Maroc"
            </p>
            <p class="press-excerpt">
              À Meyzieu, une jeune apprentie en mécanique amputée après un accident de la route
              s'apprête à relever un défi hors du commun : réaliser un rallye solidaire dans le désert.
              Autour de Maëva Salerno, 19 ans, l'association "D'un pas à l'autre" prépare sa participation
              au 205 Trophée du Maroc 2026.
            </p>
            <div class="press-footer">
              <span class="press-date">Lucien Labreuil · 8 novembre 2025</span>
              <span class="press-link">Lire l'article →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Grille événements ── */
.ev-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.ev-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform .2s, box-shadow .2s;
  display: flex;
  flex-direction: column;
}
.ev-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(4,17,57,.1); }
.ev-card--featured { border-color: #ffd5d8; }

.ev-img-wrap { position: relative; overflow: hidden; height: 180px; background: var(--bg-light); }
.ev-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s; }
.ev-card:hover .ev-img { transform: scale(1.04); }

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
.ev-cat-tag--sensibilisation { background: #faeeda; color: #854f0b; }
.ev-cat-tag--caritatif       { background: #e1f5ee; color: #0f6e56; }

.ev-body { padding: 1rem 1.1rem 1.2rem; flex: 1; display: flex; flex-direction: column; }
.ev-date  { font-family: var(--font-heading); font-size: 0.78rem; font-weight: 700; color: var(--red); margin-bottom: 5px; }
.ev-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--blue-dark); line-height: 1.3; margin: 0 0 8px; }
.ev-location {
  display: flex; align-items: flex-start; gap: 4px;
  font-size: 0.82rem; color: var(--text-muted); margin: 0 0 8px; line-height: 1.4;
}
.ev-location svg { flex-shrink: 0; margin-top: 2px; }
.ev-desc { font-size: 0.85rem; color: var(--text-soft); line-height: 1.6; margin: 0; flex: 1; }

@media (max-width: 900px) {
  .ev-grid { grid-template-columns: 1fr; }
}
</style>
