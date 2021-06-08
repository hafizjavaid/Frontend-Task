import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    meta: {
      title: "Checkout",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// For Page Title (Top in tabs)
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
export default router;
