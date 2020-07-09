import {API} from './baseService/index';

export async function getMovies() {
  try {
    const response = await API.get('/search/movie?query="fast"');
    await console.log('response movies', response);
    return Promise.resolve(response);
  } catch (error) {
    // console.log('error', error);
  }
}
