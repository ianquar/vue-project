import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // User PATH
  {
    path: "/u",
    name: "index-user",
    component: () => import("../views/User/IndexUser")
  },
  {
    path: "/u/create",
    name: "create-user",
    component: () => import("@/views/User/CreateUser")
  },
  {
    path: "/u/show",
    name: "show-user",
    component: () => import("@/views/User/ShowUser")
  }
];

const router = new VueRouter({
  routes
});

export default router;
