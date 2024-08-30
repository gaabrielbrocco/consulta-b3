const buscaCapitalizacaoMercadoRepository = (axios) => async () => {
  try {
    const response = await axios.get(
      `/quote/list?token=932NKdCnsbsdE9JrfKxeq2&sortBy=market_cap_basic&limit=10`
    );
    return response?.data?.stocks ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaCapitalizacaoMercadoRepository;
