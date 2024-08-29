import { onMounted, ref } from "vue";
import Acao from "../domain/model/acao";

const consultaController = (buscaAcaoUseCase, buscaListaAcoesUseCase) => () => {
  const acao = ref([]);
  const modelAcoes = ref(new Acao({}));
  const acaoSelecionada = ref("");
  const listaAcoes = ref([]);

  onMounted(async () => {
    mostraListaAcoes();
  });

  const buscaAcoes = async () => {
    try {
      acao.value = await buscaAcaoUseCase(acaoSelecionada.value);
      console.log(acao.value);
    } catch (error) {
      console.log(error);
    }
  };

  const mostraListaAcoes = async () => {
    try {
      listaAcoes.value = await buscaListaAcoesUseCase();
      console.log(listaAcoes.value);
    } catch (error) {}
  };

  return {
    acao,
    modelAcoes,
    acaoSelecionada,
    listaAcoes,
    buscaAcoes,
    mostraListaAcoes,
  };
};

export default consultaController;
