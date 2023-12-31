import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
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
  },
  {
    path: "/test",
    name: "TestView",
    component: () => import("../views/TestView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "HomeView",
//       component: HomeView
//     },
//     {
//       path: "/detail/:id",
//       name: "DetailView",
//       component: () => import("../views/DetailView.vue")
//     },
//     {
//       path: "/cart",
//       name: "CartView",
//       component: () => import("../views/CartView.vue")
//     }
//   ]
// });

export default router;
