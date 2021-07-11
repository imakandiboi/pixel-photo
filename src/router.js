import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/project.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
