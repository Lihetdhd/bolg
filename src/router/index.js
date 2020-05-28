import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: (resolve) => require(["@views/layout/index.vue"], resolve),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    component: (resolve) => require(["@views/login.vue"], resolve),
    meta: {
      title: "新世界的大门",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
