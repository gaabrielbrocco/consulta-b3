import axiosInstance from "./axios";

import buscaAcaoRepository from "../data/repository/buscaAcaoRepository";
import buscaListaAcoesRepository from "../data/repository/buscaListaAcoesRepository";

import buscaAcaoUseCase from "../domain/usecase/buscaAcaoUseCase";
import buscaListaAcoesUseCase from "../domain/usecase/buscaListaAcoesUseCase";

import consultaController from "../controller/consultaController";

const instance = axiosInstance;

const buscaAcaoRepositoryImpl = buscaAcaoRepository(instance);
const buscaListaAcoesRepositoryImpl = buscaListaAcoesRepository(instance);

const buscaAcaoUseCaseImpl = buscaAcaoUseCase(buscaAcaoRepositoryImpl);
const buscaListaAcoesUseCaseImpl = buscaListaAcoesUseCase(
  buscaListaAcoesRepositoryImpl
);

const consultaControllerImpl = consultaController(
  buscaAcaoUseCaseImpl,
  buscaListaAcoesUseCaseImpl
);

export { consultaControllerImpl };
