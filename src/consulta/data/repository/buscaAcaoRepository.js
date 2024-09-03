const buscaAcaoRepository = (axios) => async (ticker) => {
  try {
    const response = await axios.get(
      `/quote/${ticker}?token=${import.meta.env.VITE_API_TOKEN}`
    );
    return response?.data?.results[0] ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaAcaoRepository;
