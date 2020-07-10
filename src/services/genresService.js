import {API} from './baseService/index';
import {store} from '../redux/store';

const language = store.getState().language.language;

export async function getGenres() {
  try {
    const response = await API.get('/genre/movie/list');
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get genres', error);
  }
}
