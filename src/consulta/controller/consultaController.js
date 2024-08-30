import { onMounted, ref } from "vue";
import Acao from "../domain/model/acao";

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
    });

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
      buscaAcoes,
      mostraListaAcoes,
      mostraCapitalizacaoMercado,
    };
  };

export default consultaController;
