<template>
  <v-container class="py-10 mt-10" max-width="1500">
    <v-row no-gutters class="flex-nowrap overflow-x-auto">
      <v-col
        v-for="(item, index) in controller.listaAcoes.value"
        :key="index"
        cols="auto"
        class="pa-0 mx-2"
      >
        <v-card
          class="card-color rounded-lg"
          :width="isMobile ? 150 : 200"
          :height="isMobile ? 90 : 100"
          @click="controller.buscaAcoes(item)"
        >
          <v-row>
            <v-col cols="8">
              <v-card-title :style="{ fontSize: isMobile ? '15px' : '18px' }">
                {{ item.stock }}
              </v-card-title>
            </v-col>
            <v-col cols="4">
              <v-img
                class="rounded-lg"
                :src="item.logo"
                :height="isMobile ? 40 : 50"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-card-subtitle
              class="ml-2"
              :style="{ fontSize: isMobile ? '13px' : '16px' }"
            >
              R$ {{ item.close }}
            </v-card-subtitle>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center py-10">
      <v-col cols="12" md="6" lg="3" sm="6">
        <v-text-field
          v-model="controller.acaoSelecionada.value"
          append-inner-icon="mdi-magnify"
          label="Buscar ativos"
          :density="isMobile ? 'compact' : 'default'"
          variant="solo"
          hide-details
          @click:append-inner="controller.buscaAcoes()"
          bg-color="#0f131e"
          @keyup.enter="controller.buscaAcoes()"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="px-5 py-10">
      <v-col cols="4" md="1" lg="1" sm="1">
        <v-img
          width="80"
          height="80"
          :src="controller.acao.value.logourl"
          class="rounded"
        >
        </v-img>
      </v-col>
      <v-col cols="8" md="4" sm="2">
        <div class="text-h5 font-weight-bold">
          {{ controller.acao.value.symbol }}
        </div>
        <div>
          {{ controller.acao.value.longName }}
        </div>
      </v-col>
    </v-row>

    <v-row class="px-5">
      <v-col cols="12" lg="2" md="6" sm="7">
        <div>Preço</div>
        <div class="text-h5 font-weight-bold">
          R$ {{ controller.acao.value.regularMarketPrice }}
        </div>
      </v-col>
      <v-col cols="12" lg="3" md="6" sm="7">
        <div>Variação (dia)</div>
        <div class="text-h5 font-weight-bold">
          R$ {{ controller.acao.value.regularMarketChange }} (
          <span
            class="font-weight-bold"
            :style="{
              fontSize: '20px',
              color:
                controller.acao.value.regularMarketChangePercent < 0
                  ? 'red'
                  : 'green',
            }"
          >
            {{
              controller.acao.value.regularMarketChangePercent?.toFixed(2)
            }}% </span
          >)
        </div>
      </v-col>
      <v-col cols="6" md="2">
        <div>Min. 52 Semanas</div>
        <div class="text-h5 font-weight-bold">
          R$
          {{
            controller.acao.value.fiftyTwoWeekLow === 0
              ? "--"
              : controller.acao.value.fiftyTwoWeekLow
          }}
        </div>
      </v-col>
      <v-col cols="6" md="2">
        <div>Máx. 52 Semanas</div>
        <div class="text-h5 font-weight-bold">
          R$
          {{
            controller.acao.value.fiftyTwoWeekHigh === 0
              ? "--"
              : controller.acao.value.fiftyTwoWeekHigh
          }}
        </div>
      </v-col>

      <v-col cols="12" md="3" class="py-15">
        <v-card class="color-card-capitalizacao" max-height="500">
          <v-card-title
            class="font-weight-bold text-h6 d-flex justify-center align-center mb-5"
          >
            Capitalização de mercado
          </v-card-title>

          <v-card-text class="overflow-y-auto" style="max-height: 400px">
            <v-row
              v-for="(item, index) in controller.capitalizacaoMercado.value"
              :key="index"
            >
              <v-col cols="3" md="2">
                <v-img
                  class="rounded-circle"
                  width="50"
                  :src="item.logo"
                ></v-img>
              </v-col>
              <v-col cols="9" md="10">
                <div class="font-weight-bold">{{ item.name }}</div>
                <div>
                  {{ item.stock }}
                  <span
                    class="font-weight-bold"
                    :style="{ color: item.change < 0 ? 'red' : 'green' }"
                  >
                    <v-icon :color="item.change < 0 ? 'red' : 'green'">
                      {{ item.change < 0 ? "mdi-menu-down" : "mdi-menu-up" }}
                    </v-icon>
                    {{ item.change.toFixed(2) }}%
                  </span>
                  | R$ {{ item.close.toFixed(2) }}
                </div>
              </v-col>
            </v-row>
            <v-divider class="mt-2"></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();
const isMobile = smAndDown;

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
.overflow-x-auto {
  overflow-x: auto;
}

.color-card-capitalizacao {
  background-color: #030712;
}

@media (max-width: 600px) {
  .text-h5 {
    font-size: 1.25rem;
  }

  .font-weight-bold {
    font-size: 1rem;
  }
}
</style>
