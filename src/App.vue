<template>
  <div class="page">
    <header class="header">
      <div class="container nav">
        <router-link to="/" class="brand" aria-label="D'un Pas à l'autre — Accueil">
          <img
            class="brand-logo"
            src="/logo.png"
            alt=""
            width="48"
            height="48"
          />
          <span class="brand-title">D'un Pas à l'autre</span>
        </router-link>

        <!-- Bouton hamburger (visible seulement sur mobile) -->
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Ouvrir le menu"
          :aria-expanded="menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Menu de navigation -->
        <nav class="menu" :class="{ 'menu--open': menuOpen }">
          <router-link to="/" @click="menuOpen = false">Accueil</router-link>
          <router-link to="/evenements" @click="menuOpen = false">Évènements</router-link>
          <router-link to="/notre-premier-defi" @click="menuOpen = false" class="nav-link-defi">            
            Notre premier défi
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
              <circle cx="7.5" cy="14.5" r="1.5"/>
              <circle cx="16.5" cy="14.5" r="1.5"/>
            </svg>
          </router-link>
          <router-link to="/association" @click="menuOpen = false">L'association</router-link>
          <router-link to="/sponsors" @click="menuOpen = false">Sponsors</router-link>
          <router-link to="/nous-aider" @click="menuOpen = false">Nous aider</router-link>
          <router-link to="/contact" @click="menuOpen = false">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p class="footer-attribution">
          Icône « Accessibilité » : Uniconlabs — Flaticon.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style scoped>
/* ── Icône nav défi ── */
.nav-link-defi {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* ── Bouton hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
}

.hamburger span {
  display: block;
  height: 3px;
  background: var(--blue);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Animation croix quand ouvert */
.hamburger.open span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hamburger {
    display: flex;
  }

  .menu {
    display: none;
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #e9eef9;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    z-index: 15;
    padding: 0.5rem 0;
  }

  .menu--open {
    display: flex;
  }

  .menu a {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
  }

  .menu a:last-child {
    border-bottom: none;
  }
}
</style>