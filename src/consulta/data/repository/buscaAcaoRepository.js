const buscaAcaoRepository = (axios) => async (ticker) => {
  try {
    const response = await axios.get(
      `/quote/${ticker}?token=932NKdCnsbsdE9JrfKxeq2`
    );
    return response?.data?.results[0] ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaAcaoRepository;
