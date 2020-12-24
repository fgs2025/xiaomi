import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/login",
    name:'login',
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/details",
    name:'details',
    component: () => import("../views/details/details.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
