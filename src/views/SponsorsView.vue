<template>
  <div class="sponsors-page">
    <!-- ── Hero ── -->
    <section class="hero-sponsors">
      <div class="container hero-sponsors-inner">
        <p class="kicker">Ils croient en notre projet</p>
        <h1>Nos partenaires & sponsors</h1>
        <p class="hero-lead">
          Entreprises, artisans, associations — ils nous font confiance et
          nous permettent de porter haut les valeurs d'inclusion et de solidarité.
          Un immense merci à chacun d'eux.
        </p>
      </div>
    </section>

    <!-- ── Grille sponsors ── -->
    <section class="sponsors-section">
      <div class="container">
        <div class="sponsors-grid">
          <a
            v-for="sponsor in sponsorsTries"
            :key="sponsor.nom"
            :href="sponsor.site || (sponsor.type_contact === 'email' ? `mailto:${sponsor.contact}` : '#')"
            :target="sponsor.site ? '_blank' : '_self'"
            :rel="sponsor.site ? 'noopener noreferrer' : ''"
            class="sponsor-card"
          >
            <!-- Logo favicon ou initiales en fallback -->
            <div
              class="sponsor-avatar"
              :style="{ background: (sponsor.site && !logoFailed[sponsor.nom]) ? 'var(--bg-white)' : avatarColor(sponsor.nom), border: (sponsor.site && !logoFailed[sponsor.nom]) ? '1px solid var(--border)' : 'none' }"
            >
              <img
                v-if="sponsor.site && !logoFailed[sponsor.nom]"
                :src="`https://www.google.com/s2/favicons?domain=${domaine(sponsor.site)}&sz=64`"
                :alt="sponsor.nom"
                class="sponsor-logo-img"
                @error="onLogoError(sponsor.nom)"
              />
              <span v-else>{{ initiales(sponsor.nom) }}</span>
            </div>

            <div class="sponsor-body">
              <div class="sponsor-top">
                <h3 class="sponsor-name">{{ sponsor.nom }}</h3>
              </div>

              <p class="sponsor-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {{ sponsor.localisation }}
              </p>

              <p class="sponsor-desc">{{ sponsor.description }}</p>

              <div class="sponsor-footer">
                <span v-if="sponsor.site" class="sponsor-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                  {{ domaine(sponsor.site) }}
                </span>
                <span v-else class="sponsor-link sponsor-link--email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  {{ sponsor.contact }}
                </span>
              </div>
            </div>

            <!-- Flèche externe -->
            <div v-if="sponsor.site" class="sponsor-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            </div>

          </a>
        </div>
      </div>
    </section>

    <!-- ── Rejoindre ── -->
    <section class="join-section">
      <div class="container join-inner">
        <div class="join-text">
          <span class="section-tag">Devenir partenaire</span>
          <h2 class="join-heading">Votre entreprise veut nous soutenir ?</h2>
          <p>
            Rejoindre D'un Pas à l'Autre, c'est associer votre image à des valeurs
            d'inclusion, de solidarité et de dépassement de soi. Consultez notre
            dossier de sponsoring pour découvrir les différentes formules.
          </p>
          <div class="join-actions">
            <a href="/documents/dossier-sponsoring.pdf" download class="btn btn-primary">
              Télécharger le dossier
            </a>
            <router-link to="/contact" class="btn btn-outline-navy">
              Nous contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "SponsorsView",

  data() {
    return {
      sponsors: [
        {
          nom: "MAXADE Service",
          localisation: "8 rue du Lautaret, 69330 Jonage",
          description: "Spécialisé dans la vente de pièces d'occasion Renault. Tout type de modèle des années 1970.",
          contact: "maxade.service@free.fr",
          type_contact: "email",
          site: null,
        },
        {
          nom: "Menuiserie GUARCH",
          localisation: "184 Chem. du Mas des Tailles, 30700 Uzès",
          description: "Artisans ébénistes, une équipe aux petits soins depuis 1982.",
          contact: "https://menuiserieguarch.fr",
          type_contact: "site",
          site: "https://menuiserieguarch.fr",
        },
        {
          nom: "DEKRA",
          localisation: "France",
          description: "Leader européen de l'inspection, certification et contrôle technique automobile et industriel.",
          contact: "https://www.dekra.fr",
          type_contact: "site",
          site: "https://www.dekra.fr",
        },
        {
          nom: "Fabemi",
          localisation: "Donzère, Drôme (13 sites en France)",
          description: "Entreprise familiale depuis 1961, fabricant français de produits préfabriqués en béton (blocs, dalles, pavés, bordures…).",
          contact: "https://www.fabemi.fr",
          type_contact: "site",
          site: "https://www.fabemi.fr",
        },
        {
          nom: "SPOTICAR La Boisse",
          localisation: "La Boisse, Ain (01)",
          description: "Concessionnaire voitures d'occasion toutes marques, contrôlées et garanties jusqu'à 24 mois.",
          contact: "https://www.spoticar.fr",
          type_contact: "site",
          site: "https://www.spoticar.fr",
        },
        {
          nom: "L'Appart Fitness",
          localisation: "France",
          description: "Réseau de salles de sport ouvertes 7j/7 de 6h à 23h. Musculation, cardio, cours collectifs et coaching personnalisé.",
          contact: "https://www.lappartfitness.com",
          type_contact: "site",
          site: "https://www.lappartfitness.com",
        },
        {
          nom: "MAT-ECO RECYCLAGE",
          localisation: "Meyzieu & Bron (Métropole de Lyon)",
          description: "Plateforme de recyclage de matériaux de construction issus de déconstruction et démolition. Concassage et criblage sur site.",
          contact: "https://mat-eco.fr",
          type_contact: "site",
          site: "https://mat-eco.fr",
        },
        {
          nom: "Mondial Piscine – SARL Lumae",
          localisation: "1200 route de Remoulins, 30700 Uzès",
          description: "Pisciniste concessionnaire exclusif Mondial Piscine dans le Gard depuis 1998. Construction, rénovation et entretien de piscines sur mesure.",
          contact: "mondialpiscine.uzes@gmail.com",
          type_contact: "email",
          site: "https://uzes.mondial-piscine.eu",
        },
        {
          nom: "Uz'Events",
          localisation: "10 Pace Croix des Palmiers 30700 Uzès",
          description: "Agence événementielle et de communication locale. Organisation d'événements privés ou salons, création d'objets publicitaires et gestion de plans de communication.",
          contact: "https://www.uzevents.fr",
          type_contact: "site",
          site: "https://www.uzevents.fr",
        },
        {
          nom: "CLEVIE SERVICES",
          localisation: "98 Chemin des Cistes - 30210 VERS PONT DU GARD",
          description: "Services à la personne à domicile : ménage, repassage, nettoyage de vitres, jardinage et garde d'enfants. Intervient sur Uzès, Nîmes et environs.",
          contact: "contact@clevieservices.fr",
          type_contact: "email",
          site: "https://www.clevieservices.fr",
        },
        {
          nom: "Créa'Vert Uzès",
          localisation: "Chemin du Vigueraud, Montaren-et-Saint-Médiers (30700)",
          description: "Paysagiste depuis 1996 : création et entretien de jardins sur mesure (terrasses, clôtures, arrosage automatique, plantations). Plus de 400 jardins réalisés.",
          contact: "https://creavert-uzes-services.com",
          type_contact: "site",
          site: "https://creavert-uzes-services.com",
        },
        {
          nom: "Service Pro Recyclage",
          localisation: "Chemin du Rouquis, 30190 Bourdic",
          description: "Depuis 2014, collecte, traitement et valorisation de déchets non dangereux (déchets automobiles, viticoles, industriels, artisanaux et particuliers).",
          contact: "https://serviceprorecyclage.fr",
          type_contact: "site",
          site: "https://serviceprorecyclage.fr",
        },
        {
          nom: "SM'Concept Publicité",
          localisation: "Serviers-et-Labaume, Gard",
          description: "Marquage textile, broderie, publicité par l'objet et imprimerie. Personnalisation de vêtements (t-shirts, polos, vestes…) et objets promotionnels.",
          contact: "contact@smconcept.fr",
          type_contact: "email",
          site: "https://smconcept.fr",
        },
        {
          nom: "Comptes Tenus",
          localisation: "1 Place de la Gare, 30210 Remoulins",
          description: "Cabinet d'expertise comptable : tenue de comptes, fiscalité, conseil en gestion, paie et accompagnement des entreprises de l'Uzège.",
          contact: "nathalie@comptestenus.fr",
          type_contact: "email",
          site: "https://comptestenus.fr",
        },
        {
          nom: "Groupe Laborie",
          localisation: "36 Avenue de la Gare, 30700 Uzès",
          description: "Groupe automobile familial depuis 1946. Agent Peugeot, Citroën, Opel, Fiat et Toyota. Mécanique, carrosserie, vente de véhicules neufs et d'occasion.",
          contact: "https://www.laborie-uzes.fr",
          type_contact: "site",
          site: "https://www.laborie-uzes.fr",
        },
        {
          nom: "CPR de l'Uzège",
          localisation: "Uzès, Gard",
          description: "Réseau de recommandation d'affaires créé en 2018. Réunit une quarantaine de professionnels locaux des secteurs bâtiment et services autour de l'Uzège.",
          contact: "https://cpr-uzege.fr",
          type_contact: "site",
          site: "https://cpr-uzege.fr",
        },
        {
          nom: "LOFT Discothèque",
          localisation: "1151 Route d'Uzès, Saint-Quentin-la-Poterie (30700)",
          description: "Bar-discothèque emblématique de la région uzétienne. Soirées thématiques, DJ résident et animations tout l'été.",
          contact: "https://www.instagram.com/loft_uzes/",
          type_contact: "site",
          site: "https://www.instagram.com/loft_uzes/",
        },
        {
          nom: "SB Cuisines et Design",
          localisation: "2 Avenue du Maréchal Foch, 30700 Uzès",
          description: "Cuisiniste indépendant depuis plus de 10 ans. Conception et installation de cuisines sur mesure, haut de gamme, dans le Gard et l'Uzège. Plus de 355 projets réalisés.",
          contact: "https://sbcuisines-design.fr",
          type_contact: "site",
          site: "https://sbcuisines-design.fr",
        },
        {
          nom: "Uzège Plomberie",
          localisation: "Chemin des Cruelles, 30190 Bourdic",
          description: "Installateur et dépanneur en plomberie, chauffage et climatisation. Artisan de père en fils, intervenant sur l'Uzège et le Gard pour particuliers et professionnels.",
          contact: "Uzege-plomberie@orange.fr",
          type_contact: "email",
          site: null,
        },
        {
          nom: "ALPHA Protection",
          localisation: "Zone Artisanale Pont des Charettes, Rue des Castors, 30700 Uzès",
          description: "Spécialiste de la sécurité électronique depuis plus de 30 ans : systèmes d'alarme, télésurveillance, vidéoprotection, automatismes de portails et contrôle d'accès sur l'Uzège.",
          contact: "https://alphaprotection30.fr",
          type_contact: "site",
          site: "https://alphaprotection30.fr",
        },
        {
          nom: "CAPEB — L'artisanat du Bâtiment Gard",
          localisation: "Maison de l'Artisanat du Bâtiment, 3214 route de Montpellier, 30900 Nîmes",
          description: "Organisation professionnelle représentant et défendant les entreprises artisanales du bâtiment dans le Gard. Syndicat patronal de référence depuis 1946.",
          contact: "https://www.capeb.fr/gard",
          type_contact: "site",
          site: "https://www.capeb.fr/gard",
        },
        {
          nom: "CARO DAVIN — Restauration & Traitements de sols",
          localisation: "1527 Rte de Nîmes, 30210 Cabrières",
          description: "Artisan spécialisé dans la restauration et le traitement de sols : carrelage, pierre naturelle, béton ciré et revêtements sur mesure pour particuliers et professionnels.",
          contact: "https://www.carodavin.fr",
          type_contact: "site",
          site: "https://www.carodavin.fr",
        },
        {
          nom: "Xavier Del Pilar — Artisan Peintre",
          localisation: "6 Impasse Maguelone - 30700 ARPAILLARGUES-ET-AUREILHAC",
          description: "Artisan peintre en bâtiment, intervenant sur l'intérieur et l'extérieur pour particuliers et professionnels. Travail soigné et finitions de qualité dans l'Uzège.",
          contact: "https://xdp-deco.fr",
          type_contact: "site",
          site: "https://xdp-deco.fr",
        },
      ],

      // Suivi des logos en erreur → fallback initiales
      logoFailed: {},

      // Palette de couleurs pour les avatars (coordonnée avec la charte)
      avatarPalette: [
        "#0d2c80", "#e93445", "#081d58", "#0f6e56",
        "#854f0b", "#185fa5", "#993556", "#3b6d11",
        "#0d2c80", "#a32d2d", "#534ab7", "#0f6e56",
        "#e93445", "#185fa5", "#081d58", "#854f0b",
        "#0d2c80",
      ],
    };
  },

  computed: {
  sponsorsTries() {
    return [...this.sponsors].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
    },
  },

  methods: {
    onLogoError(nom) {
      this.logoFailed = { ...this.logoFailed, [nom]: true };
    },

    initiales(nom) {
      return nom
        .split(/[\s'-]+/)
        .filter(w => w.length > 1 && !/^(de|du|la|le|les|et|au|aux|l)$/i.test(w))
        .slice(0, 2)
        .map(w => w[0].toUpperCase())
        .join("");
    },

    avatarColor(nom) {
      const idx = nom.length % this.avatarPalette.length;
      return this.avatarPalette[idx];
    },

    domaine(url) {
      try {
        return new URL(url).hostname.replace("www.", "");
      } catch {
        return url;
      }
    },
  },
};
</script>

<style scoped>
/* ── Hero ── */
.hero-sponsors {
  background:
    linear-gradient(120deg, rgba(8,29,88,.96), rgba(13,44,128,.84)),
    radial-gradient(circle at 80% 40%, rgba(233,52,69,.25), transparent 50%);
  color: var(--bg-white);
  padding: 80px 0 64px;
}

.hero-sponsors-inner { max-width: 720px; }

.kicker {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  color: #fecdd3; margin-bottom: 0.6rem;
}

.hero-lead {
  font-size: 1.05rem; opacity: .85;
  margin-top: .5rem; max-width: 580px; line-height: 1.7;
}

.hero-stats {
  display: flex; align-items: center; gap: 20px;
  margin-top: 28px; flex-wrap: wrap;
}

.hero-stat-item { display: flex; flex-direction: column; }
.hero-stat-item strong {
  font-family: var(--font-heading);
  font-size: 1.8rem; font-weight: 800; color: var(--bg-white); line-height: 1;
}
.hero-stat-item span { font-size: 0.8rem; color: rgba(255,255,255,.55); margin-top: 2px; }

.hero-stat-sep {
  width: 1px; height: 36px;
  background: rgba(255,255,255,.2);
}

/* ── Grille ── */
.sponsors-section { padding: 52px 0 64px; }

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* ── Card ── */
.sponsor-card {
  display: flex; align-items: flex-start; gap: 14px;
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 18px 16px;
  text-decoration: none; color: inherit;
  transition: transform .2s, box-shadow .2s, border-color .2s;
  position: relative;
}

.sponsor-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--blue);
}

/* Avatar initiales */
.sponsor-avatar {
  width: 44px; height: 44px; border-radius: var(--radius-md);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.sponsor-avatar span {
  font-family: var(--font-heading);
  font-size: 0.85rem; font-weight: 800; color: white;
  letter-spacing: -.01em;
}
.sponsor-logo-img {
  width: 32px; height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.sponsor-body { flex: 1; min-width: 0; }

.sponsor-top {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 8px;
  margin-bottom: 4px;
}

.sponsor-name {
  font-family: var(--font-heading);
  font-size: 0.92rem; font-weight: 700;
  color: var(--blue-dark); line-height: 1.25;
  margin: 0;
}

.sponsor-location {
  display: flex; align-items: flex-start; gap: 3px;
  font-size: 0.75rem; color: var(--text-muted);
  margin-bottom: 8px; line-height: 1.4;
}
.sponsor-location svg { flex-shrink: 0; margin-top: 1px; }

.sponsor-desc {
  font-size: 0.82rem; color: var(--text-soft);
  line-height: 1.6; margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sponsor-footer { display: flex; align-items: center; }

.sponsor-link {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 0.75rem; font-weight: 600; color: var(--blue);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  max-width: 200px;
}
.sponsor-link--email { color: var(--text-muted); font-weight: 500; }

.sponsor-arrow {
  position: absolute; top: 14px; right: 14px;
  color: var(--text-muted); opacity: 0;
  transition: opacity .15s;
}
.sponsor-card:hover .sponsor-arrow { opacity: 1; }

/* ── Section rejoindre ── */
.join-section {
  background: var(--bg-subtle);
  padding: 72px 0;
  border-top: 1px solid var(--border);
}

.join-inner {
  display: grid; grid-template-columns: 1.2fr 1fr;
  gap: 56px; align-items: center;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--red); border: 1px solid var(--red);
  padding: 3px 10px; border-radius: var(--radius-pill);
  margin-bottom: 14px;
}

.join-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 800; color: var(--blue-dark);
  line-height: 1.2; margin: 0 0 1rem; text-align: left;
}

.join-text p {
  color: var(--text-soft); line-height: 1.7;
  margin-bottom: 1.5rem;
}

.join-actions { display: flex; gap: 0.8rem; flex-wrap: wrap; }

.btn-outline-navy {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.95rem; font-weight: 700;
  padding: 0.75rem 1.4rem; text-decoration: none;
  background: transparent; border: 2px solid var(--blue);
  color: var(--blue); transition: background .15s, color .15s;
}
.btn-outline-navy:hover { background: var(--blue); color: var(--bg-white); }

.join-visual { display: flex; flex-direction: column; gap: 12px; }

.join-card {
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  display: flex; align-items: flex-start; gap: 14px;
}

.join-card-icon { font-size: 1.6rem; flex-shrink: 0; }

.join-card-text {
  font-size: 0.9rem; color: var(--text-soft);
  line-height: 1.6; margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .sponsors-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 800px) {
  .join-inner { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 640px) {
  .sponsors-grid { grid-template-columns: 1fr; }
  .hero-stats    { gap: 12px; }
  .hero-stat-sep { display: none; }
}
</style>