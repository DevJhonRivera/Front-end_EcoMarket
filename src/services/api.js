import axios from "axios";

const api = axios.create({
  // baseURL: "https://backend-eco-market.vercel.app/api",
  // baseURL: "http://localhost:3001/api",
  baseURL:"https://backend-ecomarket-2j65.onrender.com/api"
});

api.interceptors.request.use((config) => {

  const token =
    localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default api;