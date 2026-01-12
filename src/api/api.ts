import axios, { AxiosError } from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const apiRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

apiRequest.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if(error.response) {
            console.error('API error: ', error.response.data);
        } else {
            console.error('Network or unknown error', error.message);
        };
        return Promise.reject(error);
    }
);

export default apiRequest;