<template>
  <div class="contact-page">

    <!-- ── Hero ── -->
    <section class="hero-contact">
      <div class="container hero-contact-inner">
        <p class="kicker">Solidarité · Engagement · Impact</p>
        <h1>Nous contacter</h1>
        <p class="hero-lead">
          Une question, une idée, une envie de s'impliquer ? On est là.
        </p>
      </div>
    </section>

    <!-- ── Coordonnées ── -->
    <section class="coords-section">
      <div class="container">
        <span class="section-tag center">Nos coordonnées</span>
        <h2>Échangeons</h2>
        <p class="subtitle">
          Retrouvez-nous par e-mail ou sur nos réseaux sociaux.
        </p>

        <div class="coords-grid">

          <a href="mailto:dunpasalautre69@gmail.com" class="coord-card">
            <div class="coord-icon coord-icon--red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <div class="coord-label">E-mail</div>
              <div class="coord-value">dunpasalautre69@gmail.com</div>
            </div>
          </a>

          <a href="https://www.facebook.com/dunpasalautre" target="_blank" rel="noopener" class="coord-card">
            <div class="coord-icon coord-icon--facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <div class="coord-label">Facebook</div>
              <div class="coord-value">D'un Pas à l'Autre</div>
            </div>
          </a>

          <a href="https://www.instagram.com/dun.pas.a.lautre" target="_blank" rel="noopener" class="coord-card">
            <div class="coord-icon coord-icon--instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <div>
              <div class="coord-label">Instagram</div>
              <div class="coord-value">@dun.pas.a.lautre</div>
            </div>
          </a>

          <a href="https://www.youtube.com/@Dunpasalautre" target="_blank" rel="noopener" class="coord-card">
            <div class="coord-icon coord-icon--youtube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <div class="coord-label">YouTube</div>
              <div class="coord-value">@Dunpasalautre</div>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- ── Formulaire ── -->
    <!--
      Formulaire de contact via Formspree (https://formspree.io).
      1. Crée un compte sur formspree.io
      2. Crée un nouveau formulaire → copie l'ID (ex: xpwzabcd)
      3. Remplace YOUR_FORM_ID dans l'action ci-dessous
    -->
    <section class="form-section">
      <div class="container form-container">
        <span class="section-tag center">Message direct</span>
        <h2>Envoyer un message</h2>
        <p class="subtitle">
          Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
        </p>

        <form
          action="https://formspree.io/f/mdapywlj"
          method="POST"
          class="contact-form"
          @submit="onSubmit"
        >
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nom</label>
              <input id="name" type="text" name="name" placeholder="Votre nom" required />
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input id="email" type="email" name="email" placeholder="votre@email.com" required />
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Sujet</label>
            <input id="subject" type="text" name="subject" placeholder="En quoi pouvons-nous vous aider ?" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Votre message..." required></textarea>
          </div>

          <div class="form-footer">
            <button type="submit" class="btn btn-primary" :disabled="submitted">
              {{ submitted ? 'Message envoyé !' : 'Envoyer le message' }}
            </button>
          </div>
        </form>

      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="cta-section">
      <div class="container cta-inner">
        <p>Vous souhaitez soutenir l'association ?</p>
        <router-link to="/nous-aider" class="btn btn-primary">Nous soutenir</router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)

function onSubmit() {
  // Formspree gère l'envoi — on désactive juste le bouton après soumission
  setTimeout(() => { submitted.value = true }, 100)
}
</script>

<style scoped>
/* ── Hero ── */
.hero-contact {
  background:
    linear-gradient(120deg, rgba(8,29,88,.95), rgba(13,44,128,.82)),
    radial-gradient(circle at 75% 40%, rgba(233,52,69,.28), transparent 50%);
  color: var(--bg-white);
  padding: 96px 0 80px;
}

.hero-contact-inner { max-width: 700px; }

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

/* ── Tags de section ── */
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

h2 {
  text-align: center;
  color: var(--blue-dark);
  margin-bottom: .6rem;
}

.subtitle {
  text-align: center;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
}

/* ── Coordonnées ── */
.coords-section { padding: 80px 0; }

.coords-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
}

.coord-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: border-color .2s, box-shadow .2s, transform .2s;
}

.coord-card:hover {
  border-color: var(--blue);
  box-shadow: var(--shadow-card);
  transform: translateY(-2px);
}

.coord-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coord-icon--red       { background: var(--icon-red-bg);  color: var(--red); }
.coord-icon--facebook  { background: #e7f0fd; color: #1877f2; }
.coord-icon--instagram { background: #fde8f0; color: #e1306c; }
.coord-icon--youtube   { background: #fdecea; color: #ff0000; }

.coord-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 3px;
}

.coord-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--blue-dark);
}

/* ── Formulaire ── */
.form-section { background: var(--bg-subtle); padding: 80px 0; }

.form-container { max-width: 680px; }

.contact-form { margin-top: 0; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.2rem;
}

.form-group label {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--blue-dark);
}

.form-group input,
.form-group textarea {
  padding: 0.7rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--blue-dark);
  background: var(--bg-white);
  transition: border-color .2s, box-shadow .2s;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(13,44,128,.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
  opacity: .7;
}

.form-footer { display: flex; justify-content: flex-end; margin-top: .5rem; }

.btn-primary:disabled {
  opacity: .6;
  cursor: default;
}

/* ── CTA ── */
.cta-section { padding: 64px 0; }

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  text-align: center;
}

.cta-inner p {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--blue-dark);
}

/* ── Responsive ── */
@media (max-width: 700px) {
  .coords-grid { grid-template-columns: 1fr; }
  .form-row    { grid-template-columns: 1fr; }
  .hero-contact { padding: 64px 0 56px; }
}
</style>
