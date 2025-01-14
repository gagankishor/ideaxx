import axios from 'axios';
import { RestAPI } from './Api';
import Swal from 'sweetalert2';

const useAxiosWithAuth = () => {

  const instance = axios.create({
    baseURL: RestAPI,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      // const token = "localStorage.getItem('token')";
      // console.log(token,"token")
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
        Swal.fire({
          icon: 'error',
          title: 'Session Expired',
          text: 'Your session has expired. Please log in again to continue.',
        }).then(() => {
          window.location.href = "/login";
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithAuth;
