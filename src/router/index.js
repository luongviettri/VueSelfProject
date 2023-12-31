import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DetailView from "../views/DetailView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/detail/:id",
      name: "DetailView",
      component: () => import("../views/DetailView.vue")
    },
    {
      path: "/cart",
      name: "CartView",
      component: () => import("../views/CartView.vue")
    }
  ]
});

export default router;
