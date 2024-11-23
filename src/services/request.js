import axios from 'axios';
import Cookies from 'js-cookie';
import { API_ENDPOINT, TOKEN_KEY } from '../utils/constants';
import { message } from 'antd';

const apiClient = axios.create({
  baseURL: API_ENDPOINT, 
  timeout: 10000, 
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      message.error(error.response.data.message || 'An error occurred');
    } else {
      message.error('An unexpected error occurred');
    }
    return Promise.reject(error);
  }
);

export default apiClient;