import { onMounted, ref } from "vue";
import Acao from "../domain/model/acao";
import axios from "axios";

const consultaController =
  (
    buscaAcaoUseCase,
    buscaListaAcoesUseCase,
    buscaCapitalizacaoMercadoUseCase
  ) =>
  () => {
    const acao = ref([]);
    const modelAcoes = ref(new Acao({}));
    const acaoSelecionada = ref("");
    const listaAcoes = ref([]);
    const capitalizacaoMercado = ref([]);

    onMounted(async () => {
      mostraListaAcoes();
      mostraCapitalizacaoMercado();
      buscaAcaoMounted();
    });

    const buscaAcaoMounted = async () => {
      const response = await axios.get(
        `https://brapi.dev/api/quote/B3SA3?token=${
          import.meta.env.VITE_API_TOKEN
        }`
      );
      acao.value = response?.data?.results[0] ?? [];
    };

    const buscaAcoes = async (item) => {
      try {
        if (!item) {
          acao.value = await buscaAcaoUseCase(acaoSelecionada.value);
          return;
        }
        acaoSelecionada.value = item.stock;
        acao.value = await buscaAcaoUseCase(acaoSelecionada.value);
        acaoSelecionada.value = item.stock;
      } catch (error) {
        console.log(error);
      }
    };

    const mostraListaAcoes = async () => {
      try {
        listaAcoes.value = await buscaListaAcoesUseCase();
      } catch (error) {
        console.log(error);
      }
    };

    const mostraCapitalizacaoMercado = async () => {
      try {
        capitalizacaoMercado.value = await buscaCapitalizacaoMercadoUseCase();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      acao,
      modelAcoes,
      acaoSelecionada,
      listaAcoes,
      capitalizacaoMercado,
      buscaAcaoMounted,
      buscaAcoes,
      mostraListaAcoes,
      mostraCapitalizacaoMercado,
    };
  };

export default consultaController;
