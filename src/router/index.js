import { createWebHistory, createRouter } from "vue-router";

import Consulta from "../consulta/view/consulta.vue";

const routes = [{ path: "/", component: Consulta }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
