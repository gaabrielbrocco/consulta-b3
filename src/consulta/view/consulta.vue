<template>
  <hello-world :controller="controller" />
</template>

<script setup>
import { consultaControllerImpl } from "../di/di";
import HelloWorld from "../components/hello-world.vue";

const controller = consultaControllerImpl();
</script>
