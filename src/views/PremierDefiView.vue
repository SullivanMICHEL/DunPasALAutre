<template>
  <div class="defi">

    <section class="hero">
      <div class="hero-overlay">
        <div class="container hero-content">
          <h1>Notre premier défi</h1>
          <p>
            Une aventure sportive, humaine et solidaire à travers
            le Rallye des 205 Trophées.
          </p>
        </div>
      </div>
    </section>

    <section class="story">
      <div class="container story-grid">

        <div class="story-text">
          <h2>Une aventure inspirée par Maëva</h2>

          <p>
            Pour lancer l’aventure de l’association, nous avons choisi de relever
            un premier défi symbolique : participer à un rallye à la fois
            <strong>sportif et solidaire</strong>, inscrit dans une démarche
            profondément <strong>humaine et inclusive</strong>.
          </p>

          <p>
            Ce projet trouve son origine dans l’histoire de
            <strong>Maëva</strong>.
          </p>

          <p>
            Avant son accident, Maëva aimait découvrir de nouvelles disciplines
            et se fixer des défis. Elle suivait également un
            <strong>BTS en mécanique</strong>, portée par sa passion pour
            l’univers automobile.
          </p>

          <p>
            Pour réunir ses passions, son parcours et les valeurs que nous
            souhaitons porter à travers l’association,
            <strong>le Rallye des 205 Trophées</strong> s’est imposé comme
            une évidence.
          </p>

        </div>

        <div class="story-image">
          <img src="/Mae.jpg" alt="Rallye 205 Trophée">
        </div>

      </div>
    </section>

    <section class="stats">
      <div class="container stats-grid">

        <div class="stat">
          <strong>3000 km</strong>
          <span>de parcours</span>
        </div>

        <div class="stat">
          <strong>9</strong>
          <span>jours de traversée</span>
        </div>

        <div class="stat">
          <strong>205</strong>
          <span>équipages</span>
        </div>

        <div class="stat">
          <strong>1</strong>
          <span>aventure solidaire</span>
        </div>

      </div>
    </section>

    <section class="partners">
      <div class="container partners-grid">

        <div class="partners-info">
          <h2>En savoir plus sur le 205 Trophée</h2>

          <p>
            Le <strong>205 Trophée</strong> est un rallye solidaire et sportif
            réunissant des équipages autour d’une aventure humaine unique.
          </p>

          <p>
            Pour découvrir l'événement en détail :
          </p>

          <a
            href="https://www.205trophee.com"
            target="_blank"
            class="btn-primary"
          >
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

            <img
              src="/documents/sponsoring-preview.jpg"
              alt="Dossier de sponsoring"
            />

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

          <div class="time-box">
            <strong>{{ timeLeft.days }}</strong>
            <span>Jours</span>
          </div>

          <div class="time-box">
            <strong>{{ timeLeft.hours }}</strong>
            <span>Heures</span>
          </div>

          <div class="time-box">
            <strong>{{ timeLeft.minutes }}</strong>
            <span>Minutes</span>
          </div>

          <div class="time-box">
            <strong>{{ timeLeft.seconds }}</strong>
            <span>Secondes</span>
          </div>

        </div>
      </div>
    </section>

    <RallyeMap />
  </div>
</template>

<style scoped>

.container{
  max-width:1200px;
  margin:auto;
  padding:0 20px;
}

/* HERO */

.hero{
  height:500px;
  background-image:url("/Les205.jpeg");
  background-size:cover;
  background-position:center;
  position:relative;
}

.hero-overlay{
  background:rgba(0,0,0,0.55);
  height:100%;
  display:flex;
  align-items:center;
}

.hero-content{
  color:white;
  text-align:center;
}

.hero h1{
  font-size:48px;
  margin-bottom:20px;
}

/* STORY */

.story{
  padding:80px 0;
}

.story-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;
}

.story-image img{
  max-width: 380px;
  width: 100%;
  margin: auto;
  border-radius:10px;
}

/* STATS */

.stats{
  background:#f5f5f5;
  padding:60px 0;
}

.stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  text-align:center;
}

.stat strong{
  font-size:40px;
  display:block;
}

/* RESPONSIVE */

@media(max-width:900px){

.story-grid{
grid-template-columns:1fr;
}

.stats-grid{
grid-template-columns:repeat(2,1fr);
gap:30px;
}

.hero h1{
font-size:36px;
}

}
.countdown {
  padding: 70px 0;
  text-align: center;
  background: #f5f5f5;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;
}

.time-box {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.time-box strong {
  font-size: 40px;
  display: block;
}

.time-box span {
  opacity: 0.7;
}
.partners {
  padding: 80px 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
}

.partners-info p {
  margin-bottom: 18px;
  line-height: 1.6;
}

.sponsor-card {
  max-width: 280px;
  width: 100%;
  margin: auto;
}

.pdf-card {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
}

.pdf-card img {
  width: 100%;
  height: auto;
  display: block;
}
.pdf-preview {
  height: 350px;
}

.pdf-preview iframe {
  width: 100%;
  height: 100%;
}

.pdf-actions {
  padding: 20px;
  text-align: center;
}

.btn-primary {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: #e63946;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  background: #0f172a;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

/* responsive */

@media (max-width: 900px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }

  .pdf-preview {
    height: 400px;
  }
}
</style>
<script>
import RallyeMap from "./RallyeMap.vue";
export default {
  components: {
    RallyeMap
  },
  data() {
    return {
      targetDate: new Date("2026-05-03T00:00:00"),
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      timer: null
    };
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
      const now = new Date();
      const diff = this.targetDate - now;

      if (diff <= 0) {
        clearInterval(this.timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      this.timeLeft = { days, hours, minutes, seconds };
    }
  }
};
</script>