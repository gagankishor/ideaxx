import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RestAPI } from './Api';

const useAxiosWithAuth = () => {
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: RestAPI,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token'); 
        // navigate('/login'); 
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithAuth;
