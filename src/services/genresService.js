import {API} from './baseService/index';

export async function getGenres() {
  try {
    const response = await API.get('/genre/movie/list');
    //console.log('genre', response);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get genres', error);
  }
}
