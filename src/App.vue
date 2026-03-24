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
        <nav class="menu">
          <router-link to="/">Accueil</router-link>
          <router-link to="/evenements">Evènements</router-link>
          <router-link to="/notre-premier-defi">Notre premier défi</router-link>
          <router-link to="/association">L'association</router-link>
          <router-link to="/nous-aider">Nous aider</router-link>
          <router-link to="/contact">Contact</router-link>
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
