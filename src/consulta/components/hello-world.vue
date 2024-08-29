<template>
  <v-container class="py-10 mt-10">
    <v-row no-gutters class="flex-nowrap overflow-x-auto">
      <v-col
        v-for="(item, index) in controller.listaAcoes.value"
        :key="index"
        cols="auto"
        class="pa-0 mx-2"
      >
        <v-card class="card-color rounded-lg" width="200" height="100">
          <v-row>
            <v-col cols="8">
              <v-card-title class="text-h6">{{ item.stock }}</v-card-title>
            </v-col>
            <v-col cols="4">
              <v-img class="rounded-lg" :src="item.logo"> </v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-card-subtitle class="mt-1">
              R$ {{ item.close }}
            </v-card-subtitle>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align center">
      <v-col cols="6">
        <v-text-field
          v-model="controller.acaoSelecionada.value"
          label="Digite a ação"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align center">
      <v-col cols="12">
        <v-btn @click="controller.buscaAcoes"> </v-btn>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align center">
      <v-col cols="12">
        {{ controller.acao.value.regularMarketPrice }}
        <v-img width="100" :src="controller.acao.value.logourl"> </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-color {
  background-color: #0f131e;
}

.teste {
  overflow-y: auto;
}
.overflow-x-auto {
  overflow-x: auto;
}
</style>
