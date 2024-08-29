const buscaAcaoUseCase = (repository) => async (ticker) => {
  try {
    return await repository(ticker);
  } catch (error) {
    throw error;
  }
};

export default buscaAcaoUseCase;
