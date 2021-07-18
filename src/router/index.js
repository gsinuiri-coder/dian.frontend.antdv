import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/drogueria",
    name: "Drugstore",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Drugstore.vue"),
  },
  {
    path: "/distribuidora",
    name: "Distributor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Distributor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
