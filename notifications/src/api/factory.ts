import axios from 'axios';

export const createApiClient = (config: { baseURL?: string; token?: string } = {}) => {
  const { baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api', token } = config;

  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return client;
};

const clientInstance = createApiClient();
clientInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default clientInstance;