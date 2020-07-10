import { API } from './baseService/index';
import { store } from '../redux/store';

const s = store.getState();
console.log('sssssssss', s);

export async function getGenres() {
  try {
    const response = await API.get('/genre/movie/list');
    //console.log('genre', response);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get genres', error);
  }
}
