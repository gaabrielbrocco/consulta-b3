import axiosInstance from "./axios";

import buscaAcaoRepository from "../data/repository/buscaAcaoRepository";
import buscaListaAcoesRepository from "../data/repository/buscaListaAcoesRepository";
import buscaCapitalizacaoMercadoRepository from "../data/repository/buscaCapitalizacaoMercadoRepository";

import buscaAcaoUseCase from "../domain/usecase/buscaAcaoUseCase";
import buscaListaAcoesUseCase from "../domain/usecase/buscaListaAcoesUseCase";
import buscaCapitalizacaoMercadoUseCase from "../domain/usecase/buscaCapitalizacaoMercadoUseCase";

import consultaController from "../controller/consultaController";

const instance = axiosInstance;

const buscaAcaoRepositoryImpl = buscaAcaoRepository(instance);
const buscaListaAcoesRepositoryImpl = buscaListaAcoesRepository(instance);
const buscaCapitalizacaoMercadoRepositoryImpl =
  buscaCapitalizacaoMercadoRepository(instance);

const buscaAcaoUseCaseImpl = buscaAcaoUseCase(buscaAcaoRepositoryImpl);
const buscaListaAcoesUseCaseImpl = buscaListaAcoesUseCase(
  buscaListaAcoesRepositoryImpl
);
const buscaCapitalizacaoMercadoUseCaseImpl = buscaCapitalizacaoMercadoUseCase(
  buscaCapitalizacaoMercadoRepositoryImpl
);

const consultaControllerImpl = consultaController(
  buscaAcaoUseCaseImpl,
  buscaListaAcoesUseCaseImpl,
  buscaCapitalizacaoMercadoUseCaseImpl
);

export { consultaControllerImpl };
