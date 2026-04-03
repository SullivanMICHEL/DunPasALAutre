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
          <router-link to="/notre-premier-defi" @click="menuOpen = false">Notre premier défi</router-link>
          <router-link to="/association" @click="menuOpen = false">L'association</router-link>
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