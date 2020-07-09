import {API} from './baseService/index';

export async function getMovies() {
  try {
    const response = await API.get('/movie/550?language=pt-BR');
    //await console.log('response movies', response);
    return Promise.resolve(response);
  } catch (error) {
    // console.log('error', error);
  }
}
