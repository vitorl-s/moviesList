import {API} from './baseService/index';

export async function getMovies(title) {
  try {
    const response = await API.get(`/search/movie?query=${title}`);
    await console.log('response movies', response);
    return Promise.resolve(response);
  } catch (error) {
    // console.log('error', error);
  }
}

export async function getTrendingMovies(title) {
  try {
    const response = await API.get(`/trending/movie/week`);
    await console.log('response movies', response);
    return Promise.resolve(response);
  } catch (error) {
    // console.log('error', error);
  }
}
