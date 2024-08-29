import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://brapi.dev/api",
});

export default axiosInstance;
