<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-content">
        <p class="kicker">Solidarite, Inclusion et Partage</p>
        <h1>Ensemble chaque pas compte</h1>
        <p>
          Des evènements sportifs et culturels inclusifs, ouverts a toutes et
          tous.
        </p>
        <div class="hero-actions">
          <router-link to="/evenements" class="btn btn-primary">
            Voir les evènements
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
          Rendre acessible et partager le sport et la culture a tous
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
            <p>Creer des rencontres sans difference.</p>
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
            <p>Vivre des emotions ensemble.</p>
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
            <p>Des evenements accessibles a tous.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="events">
      <div class="container">
        <div class="events-title">
          <h2>Nos prochains evenements</h2>
          <router-link to="/evenements">Voir tout le calendrier</router-link>
        </div>
        <div class="cards">
          <article class="card">
            <span class="tag">Sport</span>
            <h3>Et si on essayait le Paratennis !</h3>
            <img
              class="card-image"
              src="/IMG_5662.png"
              alt="Paratennis"
            />
            <p>13 mars 2026 - Meyzieu Tennis</p>
          </article>
          <article class="card">
            <span class="tag">Culture</span>
            <h3>Soirée caritative au Loft Uzès</h3>
            <img
              class="card-image"
              src="/PHOTO-2026-03-21-13-22-07.png"
              alt="Paratennis"
            />
            <p>21 mars 2026 - Discothèque le Loft, Saint Quentin la poterie</p>
          </article>
          <article class="card">
            <span class="tag">Sport</span>
            <h3>Tombola - Tournoi Rugby - US Meyzieu / SC Couches</h3>
            <img
              class="card-image"
              src="/IMG_24A3AFBFEA6B-1.png"
              alt="Paratennis"
            />
            <p>18 janvier - Stade des Servizières, Meyzieu</p>      
          </article>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container stats-grid">
        <div><strong>6</strong><span>Evenements organises</span></div>
        <div><strong>100</strong><span>Participants</span></div>
        <div><strong>9</strong><span>Benevoles engages</span></div>
        <div><strong>2</strong><span>Villes partenaires</span></div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2>Leurs mots nous touchent</h2>
        <div class="quotes">
          <blockquote>
            Une experience qui change le regard sur le handicap.
            <cite>Marie L.</cite>
          </blockquote>
          <blockquote>
            Des moments de partage exceptionnels.
            <cite>Thomas R.</cite>
          </blockquote>
          <blockquote>
            Ma fille s'est fait tellement d'amis.
            <cite>Sophie M.</cite>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
</template>
