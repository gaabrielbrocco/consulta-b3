const buscaCapitalizacaoMercadoRepository = (axios) => async () => {
  try {
    const response = await axios.get(
      `/quote/list?token=${
        import.meta.env.VITE_API_TOKEN
      }&sortBy=market_cap_basic&limit=10`
    );
    return response?.data?.stocks ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaCapitalizacaoMercadoRepository;
