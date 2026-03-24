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
    path: "/notre-premier-defi",
    name: "premier-defi",
    component: () => import("../views/PremierDefiView.vue"),
    meta: { title: "Notre premier défi" },
  },
  {
    path: "/association",
    name: "association",
    component: () => import("../views/AssociationView.vue"),
    meta: { title: "L'association" },
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
