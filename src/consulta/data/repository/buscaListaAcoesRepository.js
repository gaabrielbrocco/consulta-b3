const buscaAcaoRepository = (axios) => async () => {
  try {
    const response = await axios.get(
      `/quote/list?token=932NKdCnsbsdE9JrfKxeq2&limit=100&sortBy=volume`
    );
    return response?.data?.stocks ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaAcaoRepository;
