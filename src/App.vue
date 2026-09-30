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

          <!-- Dropdown Nos défis -->
          <div
            class="nav-dropdown"
            @mouseenter="defisOpen = true"
            @mouseleave="defisOpen = false"
          >
            <router-link
              to="/defis"
              class="nav-link-defis"
              @click="menuOpen = false"
            >
              Nos défis
              <span class="chevron" :class="{ open: defisOpen }">▾</span>
            </router-link>

            <!-- Desktop dropdown -->
            <ul class="dropdown-menu" v-show="defisOpen">
              <li>
                <router-link
                  to="/defis/205-trophee"
                  class="dropdown-item"
                  @click="defisOpen = false; menuOpen = false"
                >
                  🚗 205 Trophée 2026
                </router-link>
              </li>
              <li>
                <router-link
                  to="/defis/marathon"
                  class="dropdown-item"
                  @click="defisOpen = false; menuOpen = false"
                >
                  🏃‍♀️ Marathon 2027
                </router-link>
              </li>
            </ul>

            <!-- Mobile : sous-liens toujours visibles dans le menu burger -->
            <div class="dropdown-mobile">
              <router-link
                to="/defis/205-trophee"
                class="dropdown-mobile-item"
                @click="menuOpen = false"
              >
                🚗 205 Trophée 2026
              </router-link>
              <router-link
                to="/defis/marathon"
                class="dropdown-mobile-item"
                @click="menuOpen = false"
              >
                🏃‍♀️ Marathon de Paris 2027
              </router-link>
            </div>
          </div>

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
      defisOpen: false,
    };
  },
};
</script>

<style scoped>
/* ── Dropdown Nos défis (desktop) ── */
.nav-dropdown {
  position: relative;
}

.nav-link-defis {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.chevron {
  font-size: 0.72rem;
  transition: transform 0.2s ease;
  display: inline-block;
  line-height: 1;
}

.chevron.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 18px 0 8px; /* 18px en haut = pont invisible entre le lien et le menu */
  min-width: 220px;
  list-style: none;
  margin: 0;
  z-index: 100;
  animation: fadeInDown 0.15s ease;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  font-size: 0.93rem;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: #f3f4f6;
  color: #6366f1;
}

/* Mobile : masquer le dropdown desktop, afficher les sous-liens intégrés */
.dropdown-mobile {
  display: none;
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

  .menu a,
  .menu .nav-link-defis {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
  }

  /* Sur mobile, masquer le dropdown desktop et montrer les sous-liens */
  .dropdown-menu {
    display: none !important;
  }

  .dropdown-mobile {
    display: flex;
    flex-direction: column;
  }

  .dropdown-mobile-item {
    padding: 0.7rem 1.5rem 0.7rem 2.5rem;
    font-size: 0.92rem;
    color: #4b5563;
    text-decoration: none;
    border-bottom: 1px solid #f1f5f9;
    background: #f8fafc;
  }

  .dropdown-mobile-item:last-child {
    border-bottom: 1px solid #f1f5f9;
  }

  .menu a:last-child {
    border-bottom: none;
  }

  .nav-dropdown {
    display: contents;
  }

  .chevron {
    display: none;
  }
}
</style>