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

    <!-- ── Petites mains ── -->
    <section class="merci-section">
      <div class="container">
        <span class="section-tag center">Ils nous ont aidés</span>
        <h2 class="merci-title">Nos petites mains</h2>
        <p class="merci-subtitle">
          Derrière chaque avancée depuis la création de cette association, il y a des personnes qui ont donné de leur temps,
          de leur énergie et de leur cœur. Et pour toutes ces personnes là nous tenons a leur dire ...
        </p>
        <div class="merci-center">Merci !</div>
        <div class="word-cloud">
          <span
            v-for="(prenom, i) in prenoms.slice(0, 15)"
            :key="prenom"
            class="prenom-tag"
            :style="prenomStyle(i)"
          >{{ prenom }}</span>

          <span
            v-for="(prenom, i) in prenoms.slice(15)"
            :key="prenom"
            class="prenom-tag"
            :style="prenomStyle(i + 15)"
          >{{ prenom }}</span>
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
          nom: "DEKRA Automotive",
          localisation: "France",
          description: "Leader européen de l'inspection, certification et contrôle technique automobile et industriel.",
          contact: "https://www.dekra-norisko.fr/a-propos-de-nous/le-groupe-dekra-automotive,id-1148",
          type_contact: "site",
          site: "https://www.dekra-norisko.fr/a-propos-de-nous/le-groupe-dekra-automotive,id-1148",
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
          localisation: "Saint Romain de Jalionas (38460) - Pusignan (69330)",
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
        {
          nom: "SAS Belmas Daumas",
          localisation: "ZI de Gaujac, 1 Rue Gustave Eiffel, 11200 Lézignan-Corbières",
          description: "Établissements Belmas, famille de garagistes depuis 1929. Agent Peugeot proposant vente de véhicules neufs et d'occasion, mécanique, carrosserie et dépannage 24h/24.",
          contact: "https://www.peugeotproximity.fr/garage/sas-belmas-daumas",
          type_contact: "site",
          site: "https://www.peugeotproximity.fr/garage/sas-belmas-daumas",
        },
        {
          nom: "SARLU Aunis Utilitaires",
          localisation: "107 Bis Rue de la Juillerie, 17170 Ferrières",
          description: "Garage Peugeot. Entretien et réparation toutes marques, vente de véhicules neufs et d'occasion, location.",
          contact: "https://ferrieresautomobiles.fr",
          type_contact: "site",
          site: "https://ferrieresautomobiles.fr",
        },
        {
          nom: "PG Marinelli",
          localisation: "D1084 Pont de Chazey, 01800 Villieu-Loyes-Mollon",
          description: "Concessionnaire automobile depuis plus de 40 ans. Agent Peugeot et Volkswagen, vente de véhicules neufs et d'occasion, atelier mécanique et carrosserie-peinture.",
          contact: "https://www.peugeotproximity.fr/garage/pg-marinelli",
          type_contact: "site",
          site: "https://www.peugeotproximity.fr/garage/pg-marinelli",
        },
        {
          nom: "SARL Mickaël Berera",
          localisation: "5 Route de Ternay, 69360 Communay",
          description: "Garage agent Peugeot et Citroën. Entretien et réparation toutes marques, mécanique, carrosserie, vente de véhicules d'occasion.",
          contact: "https://www.peugeotproximity.fr/garage/berera-mickael-sarl",
          type_contact: "site",
          site: "https://www.peugeotproximity.fr/garage/berera-mickael-sarl",
        },
        {
          nom: "SARL Garage des 4 Chemins",
          localisation: "588 Route de Balan, 01120 Dagneux",
          description: "Agent Peugeot intervenant sur toutes marques. Mécanique, carrosserie, peinture, vente de véhicules neufs et d'occasion. Situé à quelques kilomètres de Meyzieu.",
          contact: "https://concessions.peugeot.fr/balan",
          type_contact: "site",
          site: "https://concessions.peugeot.fr/balan",
        },
        {
          nom: "MECASPORT",
          localisation: "198 Avenue des Cèdres, 38280 Villette-d'Anthon",
          description: "Garage automobile agréé assurances, spécialisé dans l'entretien et la réparation de véhicules toutes marques.",
          contact: null,
          type_contact: "site",
          site: "https://www.mecasport38.fr",
        },
        {
          nom: "SAS Vigne Automobiles",
          localisation: "14 Avenue de Verdun, 69330 Meyzieu",
          description: "Agent Renault et Dacia à Meyzieu. Vente de véhicules neufs et d'occasion, mécanique, carrosserie, peinture et agréé assurances.",
          contact: "https://www.renault-vigne-automobiles-lpa.fr",
          type_contact: "site",
          site: "https://www.renault-vigne-automobiles-lpa.fr",
        },
        {
          nom: "Jean de Paris — Intermarché",
          localisation: "69330 Meyzieu",
          description: "Supermarché Intermarché de Meyzieu. Grande surface alimentaire et non-alimentaire au service des habitants du territoire.",
          contact: null,
          type_contact: "site",
          site: "https://www.intermarche.com/magasin?utm_source=gmb",
        },
        {
          nom: "SCE Sinotec",
          localisation: "555 Rue Gustave Eiffel, 69330 Meyzieu",
          description: "Spécialiste du mobilier et matériel événementiel depuis 22 ans. Chaises, tables, buffets, scènes, mobilier lumineux pour professionnels de l'événementiel et du CHR.",
          contact: "https://www.sinotec.fr",
          type_contact: "site",
          site: "https://www.sinotec.fr",
        },
        {
          nom: "Horus and Co",
          localisation: "5 Avenue Lionel Terray, 69330 Meyzieu",
          description: "Promoteur immobilier basé à Meyzieu.",
          contact: null,
          type_contact: null,
          site: null,
        },

        {
          nom: "CVU Services",
          localisation: "Montaren-et-Saint-Médiers (30700)",
          description: "Commerce de gros de fleurs et plantes. Fournisseur de végétaux pour professionnels, situé dans le Gard près d'Uzès.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "LUGIS",
          localisation: "6 Impasse Monge, 69330 Meyzieu",
          description: "Entreprise de travaux de plâtrerie basée à Meyzieu. Intervient sur des chantiers de construction et rénovation pour particuliers et professionnels.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "EGBS",
          localisation: "6 Impasse Monge, 69330 Meyzieu",
          description: "Entreprise générale du bâtiment à Meyzieu. Construction et rénovation tous corps d'état pour particuliers, professionnels et collectivités.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "ORFIS",
          localisation: "149 Bd de la Bataille de Stalingrad, 69100 Villeurbanne",
          description: "Cabinet d'expertise comptable, d'audit et de conseil implanté dans la région lyonnaise depuis plus de 20 ans. Membre du groupe Advolis Orfis.",
          contact: "https://advolis-orfis.com",
          type_contact: "site",
          site: "https://advolis-orfis.com",
        },
        {
          nom: "Uzège Assur Conseil — Bernard Pascal Generali",
          localisation: "Uzès (30700)",
          description: "Courtier en assurance Generali sur le bassin d'Uzès. Accompagnement personnalisé pour particuliers et professionnels dans tous leurs besoins en assurance.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "Pupil Optique",
          localisation: "18 Boulevard Gambetta, 30700 Uzès",
          description: "Opticien à Uzès proposant lunettes, lentilles et examens de vue.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "Dolce Cuisines",
          localisation: "Chemin du Laquet, 30360 Euzet",
          description: "Cuisiniste artisanal dans le Gard. Conception et installation de cuisines sur mesure pour particuliers.",
          contact: null,
          type_contact: null,
          site: null,
        },
        {
          nom: "US Meyzieu Rugby",
          localisation: "139 Rue de la République, 69330 Meyzieu",
          description: "Club de rugby de Meyzieu évoluant en Fédérale 2. Toutes catégories de l'école de rugby aux seniors, partenaire sportif et associatif du territoire.",
          contact: null,
          type_contact: "site",
          site: "https://usmeyzieurugby.ffr.fr",
        },
        {
          nom: "DG Automobiles",
          localisation: "118 Rue de la République, 69330 Meyzieu",
          description: "Concessionnaire Peugeot, Citroën, DS et Ami à Meyzieu depuis plus de 20 ans. Vente de véhicules neufs et d'occasion toutes marques, mécanique, carrosserie, peinture et location.",
          contact: "https://www.dgautomobiles.fr",
          type_contact: "site",
          site: "https://www.dgautomobiles.fr",
        },
        {
          nom: "Auto-contrôle SALERNO",
          localisation: "6 Av. du Dr Schweitzer, 69330 Meyzieu",
          description: "Centre de contrôle technique automobile - Groupe Dekra-Norisko",
          contact: null,
          type_contact: "site",
          site: "https://www.dekra-norisko.fr/norisko/controle-technique/meyzieu,69330/6-avenue-du-docteur-schweitzer?S069V187&utm_source=google&utm_medium=mybusiness&utm_campaign=fiche_centre&utm_term=Meyzieu-Z.I&utm_content=S069V187",
        },
        {
          nom: "DEKRA Contrôle Technique — Uzès",
          localisation: "ZA Pont des Charrettes, 30700 Uzès",
          description: "Centre de contrôle technique agréé DEKRA, situé dans la zone artisanale de Pont des Charrettes à Uzès. Contrôle technique toutes marques pour particuliers et professionnels.",
          contact: null,
          type_contact: "site",
          site: "https://www.dekra-norisko.fr/dekra/controle-technique/uzes,30700/pont-des-charrettes?S030D090",
        },
        {
          nom: "Mairie de Jonage",
          localisation: "69330 Jonage",
          description: "Commune de Jonage, partenaire institutionnel de l'association D'un Pas à l'Autre. Soutien local à une initiative solidaire et inclusive portée par des habitants du territoire.",
          contact: null,
          type_contact: "site",
          site: "https://www.mairiedejonage.com",
        },
        {
          nom: "MBA 06 - MALBERT & BERTHOUD AUTOMOBILES",
          localisation: "Zone commerciale de la Paoute derrière BESSON, 30 Trav. de la Paoute, 06130 Grasse",
          description: "Agent officiel Peugeot et Fiat à Grasse depuis plusieurs décennies. Vente de véhicules neufs et d'occasion toutes marques, entretien, réparation mécanique et carrosserie dans les Alpes-Maritimes.",
          contact: null,
          type_contact: "site",
          site: "https://www.mba06.fr",
        },
        {
          nom: "COMBRAY AUTOMOBILES RINGUEDE",
          localisation: "1 Rue de la Croix des Marains, 28120 Illiers-Combray",
          description: "Entreprise familiale fondée en 1984. Agent Peugeot à Illiers-Combray en Eure-et-Loir, spécialisé dans la vente, la réparation mécanique, la carrosserie et la peinture toutes marques.",
          contact: null,
          type_contact: "site",
          site: "https://concessions.peugeot.fr/illiers-combray/nous-contacter/info-utiles/",
        },
        {
          nom: "Auto OUSTRIC",
          localisation: "ZA De Bordevieille - 82500 Beaumont-de-Lomagne",
          description: "Garage familial agent Peugeot et Citroën à Beaumont-de-Lomagne en Tarn-et-Garonne. Vente de véhicules neufs et d'occasion, entretien et réparation mécanique et carrosserie toutes marques, avec un second site Citroën à Sérignac.",
          contact: null,
          type_contact: "site",
          site: "https://www.auto-oustric.com/peugeot.php",
        },
        {
          nom: "Club de Tennis de Meyzieu",
          localisation: "Parc des Servizières - 139 Rue de la République, 69330 Meyzieu",
          description: "Club de tennis situé dans le parc sportif de Meyzieu. Ouvert aux débutants comme aux joueurs confirmés.",
          contact: null,
          type_contact: "site",
          site: "https://tenup.fft.fr/club/50690590",
        },
        {
          nom: "Garage Peugeot Léna",
          localisation: "26 Rue Docteur Lavergne, 22400 Lamballe",
          description: "Entreprise familiale fondée en 1912. Agent Peugeot à Lamballe en Bretagne, proposant la vente de véhicules neufs et d'occasion, l'entretien et la réparation toutes marques, ainsi qu'un service Spoticar.",
          contact: null,
          type_contact: "site",
          site: "https://concessions.peugeot.fr/lena/?location=LAMBALLE%7C0",
        },
      ],

      // Suivi des logos en erreur → fallback initiales
      logoFailed: {},

      // Prénoms des petites mains
      prenoms: [
        "Anna", "Mauro", "Dario", "Hélène", "Christian", "Sabine", 
        "Philippe", "Tanguy", "Bernard", "Julien", "Christophe", "Alexis",
        "Jean-Mi", "Damien", "Loïc", "Fati", "René", "Sandro", "Anne-So",
        "Toni", "Gisèle", "Enzo", "Laëtitia", "Pedro", "Carlos", "Cyril", 
        "Claire", "Anne-Marie", "Elias", "Nicolas", "Emmanuel", "Alice",
        "Fabrice", "Sergio", "Audrey", "Frédérique", "Martin", "Michel", 
        "Yohan", "Aurélie", "Patrice", "Tiffany", 
      ],

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

    prenomStyle(i) {
      const palette = [
        "#0d2c80", "#e93445", "#0f6e56", "#854f0b",
        "#185fa5", "#993556", "#3b6d11", "#6b21a8",
        "#0e7490", "#b45309", "#1d4ed8", "#be123c",
      ];
      const sizes   = ["0.85rem", "0.95rem", "1.05rem", "1.15rem", "1.3rem", "0.78rem"];
      const weights = [400, 500, 600, 700];
      const color  = palette[i % palette.length];
      const size   = sizes[(i * 3 + 1) % sizes.length];
      const weight = weights[(i * 7) % weights.length];
      return { color, fontSize: size, fontWeight: weight };
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
/* ── Petites mains ── */
.merci-section {
  padding: 80px 0 96px;
  background: var(--bg-subtle);
}
.merci-title {
  text-align: center;
  color: var(--blue-dark);
  margin-bottom: .5rem;
}
.merci-subtitle {
  text-align: center;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto 3rem;
  line-height: 1.65;
}
.word-cloud {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  min-height: 380px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px 22px;
  padding: 80px 60px;
}
.prenom-tag {
  font-family: var(--font-heading);
  letter-spacing: -.01em;
  line-height: 1;
  transition: transform .2s, opacity .2s;
  cursor: default;
  opacity: .85;
}
.prenom-tag:hover { transform: scale(1.18); opacity: 1; }
.prenom-tag:nth-child(3n)   { transform: rotate(-2deg); }
.prenom-tag:nth-child(3n+1) { transform: rotate(1.5deg); }
.prenom-tag:nth-child(3n+2) { transform: rotate(-1deg); }
.prenom-tag:nth-child(3n):hover   { transform: rotate(-2deg) scale(1.18); }
.prenom-tag:nth-child(3n+1):hover { transform: rotate(1.5deg) scale(1.18); }
.prenom-tag:nth-child(3n+2):hover { transform: rotate(-1deg) scale(1.18); }
.merci-center {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--blue-dark);
  text-align: center;
  line-height: 1.2;
}
@media (max-width: 600px) {
  .word-cloud { padding: 50px 20px 60px; min-height: 400px; min-height: 340px }
}
</style>