import axios from 'axios';
import {BASEURL} from '../../consts/baseUrl';
import {TOKEN} from '../../consts/token';

const API = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + TOKEN,
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
    return Promise.reject(error.response.data);
  },
);

export default API;
