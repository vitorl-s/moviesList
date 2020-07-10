import axios from 'axios';
import {BaseUrl} from '../../consts/baseUrl';
import {Token} from '../../consts/token';

const API = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + Token,
  },
});

API.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      'success' in response.data &&
      response.data.success === false
    ) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

export default API;
