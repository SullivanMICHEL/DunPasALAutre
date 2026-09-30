import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Accueil" },
  },
  {
    path: "/evenements",
    name: "evenements",
    component: () => import("../views/EvenementsView.vue"),
    meta: { title: "Évènements" },
  },
  {
    path: "/defis",
    name: "defis",
    component: () => import("../views/DefisView.vue"),
    meta: { title: "Nos défis" },
  },
  {
    path: "/defis/205-trophee",
    name: "defi-205-trophee",
    component: () => import("../views/PremierDefiView.vue"),
    meta: { title: "205 Trophée 2026" },
  },
  {
    path: "/defis/marathon",
    name: "defi-marathon",
    component: () => import("../views/MarathonView.vue"),
    meta: { title: "Marathon 2027" },
  },
  // Redirection de l'ancienne URL pour ne pas casser les liens existants
  {
    path: "/notre-premier-defi",
    redirect: "/defis/205-trophee",
  },
  {
    path: "/association",
    name: "association",
    component: () => import("../views/AssociationView.vue"),
    meta: { title: "L'association" },
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: () => import("../views/SponsorsView.vue"),
    meta: { title: "Nos sponsors" },
  },
  {
    path: "/nous-aider",
    name: "nous-aider",
    component: () => import("../views/NousAiderView.vue"),
    meta: { title: "Nous aider" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
    meta: { title: "Contact" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const base = "D'un Pas à l'autre";
  document.title = to.meta.title ? `${to.meta.title} | ${base}` : base;
});

export default router;