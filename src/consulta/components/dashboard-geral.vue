<template>
  <v-container
    :style="{ backgroundColor: backgroundColor }"
    class="py-10"
    max-width="1500"
  >
    <v-app-bar app :style="{ backgroundColor: appBarColor, opacity: 0.9 }">
      <v-spacer></v-spacer>
      <v-col cols="10" lg="3" sm="2">
        <v-text-field
          v-model="controller.acaoSelecionada.value"
          append-inner-icon="mdi-magnify"
          label="Buscar ativos"
          variant="outlined"
          density="compact"
          hide-details
          flat
          class="mx-4 font-weight-bold"
          @click:append-inner="controller.buscaAcoes()"
          @keyup.enter="controller.buscaAcoes()"
        ></v-text-field>
      </v-col>
      <v-col cols="2" lg="2" sm="2">
        <v-btn icon @click="toggleTheme">
          <v-icon size="large">mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-row no-gutters class="flex-nowrap overflow-x-auto">
      <v-col
        v-for="(item, index) in controller.listaAcoes.value"
        :key="index"
        cols="auto"
        class="pa-0 mx-2"
      >
        <v-card
          class="rounded-lg"
          elevation="0"
          :style="{ backgroundColor: cardColor }"
          :width="isMobile ? 190 : 200"
          height="100"
          @click="controller.buscaAcoes(item)"
        >
          <v-row>
            <v-col cols="8">
              <v-card-title
                :style="{ fontSize: isMobile ? '20px' : '18px' }"
                class="font-weight-bold"
              >
                {{ item.stock }}
              </v-card-title>
            </v-col>
            <v-col cols="4">
              <v-img class="rounded-lg" :src="item.logo" height="50"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-card-subtitle
              class="ml-2 font-weight-bold"
              :style="{ fontSize: isMobile ? '17px' : '16px' }"
            >
              R$ {{ item.close }}
            </v-card-subtitle>
          </v-row>
        </v-card>
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
              fontSize: '24px',
              color:
                controller.acao.value.regularMarketChangePercent < 0
                  ? 'red'
                  : 'green',
            }"
          >
            {{
              controller.acao.value.regularMarketChangePercent?.toFixed(2)
            }}%</span
          >
          <span
            class="font-weight-bold"
            :style="{
              color:
                controller.acao.value.regularMarketChangePercent < 0
                  ? 'red'
                  : 'green',
            }"
          >
            <v-icon
              class="mb-2"
              size="large"
              :color="
                controller.acao.value.regularMarketChangePercent < 0
                  ? 'red'
                  : 'green'
              "
            >
              {{
                controller.acao.value.regularMarketChangePercent < 0
                  ? "mdi-menu-down"
                  : "mdi-menu-up"
              }}
            </v-icon></span
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
        <v-card
          :style="{ backgroundColor: cardColor }"
          elevation="0"
          max-height="460"
          max-width="380"
          class="rounded-lg"
        >
          <v-card-title
            class="font-weight-bold text-h6 d-flex justify-center align-center mb-5"
          >
            Capitalização de mercado
          </v-card-title>

          <v-card-text
            class="overflow-y-auto overflow-x-hidden pa-0"
            style="max-height: 400px"
          >
            <v-row
              v-for="(item, index) in controller.capitalizacaoMercado.value"
              :key="index"
            >
              <v-col cols="3" md="2">
                <v-img
                  class="ml-5 rounded-circle"
                  :width="isMobile ? 40 : 50"
                  :src="item.logo"
                ></v-img>
              </v-col>
              <v-col cols="9">
                <div class="font-weight-bold">{{ item.name }}</div>
                <div>
                  <span style="color: gray">
                    {{ item.stock }}
                  </span>

                  |
                  <span
                    class="font-weight-bold"
                    :style="{ color: item.change < 0 ? 'red' : 'green' }"
                  >
                    {{ item.change.toFixed(2) }}%
                    <v-icon :color="item.change < 0 ? 'red' : 'green'">
                      {{ item.change < 0 ? "mdi-menu-down" : "mdi-menu-up" }}
                    </v-icon>
                  </span>

                  <span> R${{ item.close.toFixed(2) }} </span>
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
import { useDisplay, useTheme } from "vuetify";
import { computed } from "vue";

const { smAndDown } = useDisplay();
const isMobile = smAndDown;

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

const backgroundColor = computed(() =>
  theme.global.current.value.dark ? "#030712" : "#ffffff"
);

const appBarColor = computed(() =>
  theme.global.current.value.dark ? "#030712" : "#ffffff"
);

const cardColor = computed(() =>
  theme.global.current.value.dark ? "#0F131E" : "#F2F2F3"
);

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
