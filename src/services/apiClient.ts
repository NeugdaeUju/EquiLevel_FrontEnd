import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Injecte automatiquement le token JWT sur chaque requête sortante, si présent.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('equisium_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;