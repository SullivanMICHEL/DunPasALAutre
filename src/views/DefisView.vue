<template>
  <div class="defis-page">
    <div class="defis-header">
      <h1>Nos défis</h1>
      <p class="defis-subtitle">
        L'association vit et grandit au rythme de ses défis. Chacun d'eux est une invitation à vivre une aventure humaine hors du commun, aux côtés de personnes valides et en situation de handicap, unis par le dépassement de soi.
      </p>
    </div>

    <!-- Chemin chronologique -->
    <div class="defis-path">
      <!-- Défi 1 : 205 Trophée -->
      <div class="defi-node completed">
        <RouterLink to="/defis/205-trophee" class="defi-card">
          <div class="defi-card-img">
            <img src="/car.png" alt="205 Trophée 2026" />
            <div class="defi-badge done">✅ Terminé</div>
          </div>
          <div class="defi-card-body">
            <span class="defi-tag">Raid automobile</span>
            <h2>205 Trophée 2026</h2>
            <p>Traversée du Maroc à bord d'une Peugeot 205, de Tanger à Essaouira. Une aventure sportive et solidaire, ponctuée de dons de matériel médical et scolaire dans des écoles locales.</p>
            <span class="defi-cta">Voir le bilan →</span>
          </div>
        </RouterLink>
        <div class="defi-date">Juin 2026</div>
      </div>

      <!-- Connecteur avec pas -->
      <div class="path-connector">
        <div class="path-line"></div>
        <div class="path-steps">
          <!-- Pied gauche rouge -->
          <div class="step-pair step-left">
            <svg class="foot anim-l1" width="32" height="56" viewBox="0 0 32 56" fill="none">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#e63946"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#e63946"/>
            </svg>
          </div>
          <!-- Pied droit bleu -->
          <div class="step-pair step-right">
            <svg class="foot anim-r1" width="32" height="56" viewBox="0 0 32 56" fill="none" style="transform: scaleX(-1)">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#1e3a8a"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#1e3a8a"/>
            </svg>
          </div>
          <!-- Pied gauche rouge -->
          <div class="step-pair step-left">
            <svg class="foot anim-l2" width="32" height="56" viewBox="0 0 32 56" fill="none">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#e63946"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#e63946"/>
            </svg>
          </div>
        </div>
        <div class="path-line"></div>
      </div>

      <!-- Défi 2 : Marathon -->
      <div class="defi-node in-progress">
        <RouterLink to="/defis/marathon" class="defi-card">
          <div class="defi-card-img marathon-img">
            <div class="marathon-icon">🏃‍♀️</div>
            <div class="defi-badge ongoing">🔄 En cours</div>
          </div>
          <div class="defi-card-body">
            <span class="defi-tag">Course à pied</span>
            <h2>Marathon 2027</h2>
            <p>Maëva se prépare à courir un Marathon en 2027 avec sa prothèse, un défi d'envergure qu'elle compte réaliser avec détermination.</p>
            <span class="defi-cta">Suivre l'aventure →</span>
          </div>
        </RouterLink>
        <div class="defi-date">Avril 2027</div>
      </div>

      <!-- Connecteur futur -->
      <div class="path-connector future">
        <div class="path-line dashed"></div>
        <div class="path-steps">
          <!-- Pied gauche rouge (grisé) -->
          <div class="step-pair step-left">
            <svg class="foot faded" width="32" height="56" viewBox="0 0 32 56" fill="none">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#e63946"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#e63946"/>
            </svg>
          </div>
          <!-- Pied droit bleu (grisé) -->
          <div class="step-pair step-right">
            <svg class="foot faded" width="32" height="56" viewBox="0 0 32 56" fill="none" style="transform: scaleX(-1)">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#1e3a8a"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#1e3a8a"/>
            </svg>
          </div>
          <!-- Pied gauche rouge (grisé) -->
          <div class="step-pair step-left">
            <svg class="foot faded" width="32" height="56" viewBox="0 0 32 56" fill="none">
              <ellipse cx="14" cy="17" rx="11" ry="15" fill="#e63946"/>
              <ellipse cx="15" cy="47" rx="8" ry="7" fill="#e63946"/>
            </svg>
          </div>
        </div>
        <div class="path-line dashed"></div>
      </div>

      <!-- Prochain défi -->
      <div class="defi-node future-node">
        <div class="defi-card future-card">
          <div class="defi-card-img future-img">
            <div class="future-icon">🌟</div>
          </div>
          <div class="defi-card-body">
            <span class="defi-tag">À venir</span>
            <h2>Le prochain défi…</h2>
            <p>L'aventure continue. Restez à l'écoute pour découvrir ce que l'association prépare.</p>
          </div>
        </div>
        <div class="defi-date">?</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.defis-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px 80px;
}

/* ── Header ── */
.defis-header {
  text-align: center;
  margin-bottom: 60px;
}

.defis-header h1 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.defis-subtitle {
  font-size: 1.15rem;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Chemin ── */
.defis-path {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* ── Nœud défi ── */
.defi-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 620px;
}

.defi-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ── Carte ── */
.defi-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  background: #fff;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.defi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.15);
}

.future-card {
  cursor: default;
  opacity: 0.6;
}

.future-card:hover {
  transform: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* ── Image / visuel ── */
.defi-card-img {
  position: relative;
  overflow: hidden;
  background: #e5e7eb;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.defi-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.marathon-img {
  background: linear-gradient(135deg, #1a1a2e 0%, #3b3b6e 100%);
}

.future-img {
  background: linear-gradient(135deg, #374151 0%, #6b7280 100%);
}

.marathon-icon,
.future-icon {
  font-size: 4rem;
  position: relative;
  z-index: 1;
}

/* ── Badge ── */
.defi-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 99px;
}

.defi-badge.done {
  background: #d1fae5;
  color: #065f46;
}

.defi-badge.ongoing {
  background: #fef3c7;
  color: #92400e;
}

/* ── Corps de la carte ── */
.defi-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.defi-tag {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6366f1;
}

.defi-card-body h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.3;
}

.defi-card-body p {
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.defi-cta {
  font-size: 0.88rem;
  font-weight: 700;
  color: #6366f1;
  margin-top: 4px;
}

/* ── Connecteur ── */
.path-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
}

.path-line {
  width: 3px;
  height: 28px;
  background: #6366f1;
  border-radius: 2px;
}

.path-line.dashed {
  background: repeating-linear-gradient(
    to bottom,
    #9ca3af 0px,
    #9ca3af 6px,
    transparent 6px,
    transparent 12px
  );
}

/* ── Pas SVG ── */
.path-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
}

.step-pair {
  display: flex;
  align-items: center;
}

.step-left  { transform: translateX(-10px); }
.step-right { transform: translateX(10px); }

/* Animations d'apparition séquentielle */
@keyframes stepIn {
  0%   { opacity: 0; transform: translateX(-10px) rotate(180deg) scale(0.7); }
  60%  { opacity: 1; transform: translateX(-10px) rotate(180deg) scale(1.05); }
  100% { opacity: 1; transform: translateX(-10px) rotate(180deg) scale(1); }
}
@keyframes stepInR {
  0%   { opacity: 0; transform: translateX(10px) rotate(180deg) scale(0.7); }
  60%  { opacity: 1; transform: translateX(10px) rotate(180deg) scale(1.05); }
  100% { opacity: 1; transform: translateX(10px) rotate(180deg) scale(1); }
}

.anim-l1 { animation: stepIn  1.8s ease-out infinite; animation-delay: 0s; }
.anim-r1 { animation: stepInR 1.8s ease-out infinite; animation-delay: 0.5s; }
.anim-l2 { animation: stepIn  1.8s ease-out infinite; animation-delay: 1s; }

.foot.faded {
  opacity: 0.2;
  animation: none !important;
  transform: rotate(180deg);
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .defis-header h1 { font-size: 2rem; }

  .defi-card {
    grid-template-columns: 1fr;
  }

  .defi-card-img {
    height: 140px;
  }

  .defi-card-img img {
    position: absolute;
  }
}
</style>