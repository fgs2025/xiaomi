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
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/details/details.vue"),
  },
  {
    path: "/buy",
    name: "buy",
    component: () => import("../views/buy/buy.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
});
// const VueRouterPush = Router.prototype.push;
// Router.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
export default router;
