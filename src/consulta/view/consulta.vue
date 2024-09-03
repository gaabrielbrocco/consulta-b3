<template>
  <dashboard-geral :controller="controller" />
</template>

<script setup>
import { consultaControllerImpl } from "../di/di";
import DashboardGeral from "../components/dashboard-geral.vue";

const controller = consultaControllerImpl();
</script>
