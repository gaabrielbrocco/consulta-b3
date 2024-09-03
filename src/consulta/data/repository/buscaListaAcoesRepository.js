const buscaAcaoRepository = (axios) => async () => {
  try {
    const response = await axios.get(
      `/quote/list?token=${
        import.meta.env.VITE_API_TOKEN
      }&limit=100&sortBy=volume`
    );
    return response?.data?.stocks ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaAcaoRepository;
