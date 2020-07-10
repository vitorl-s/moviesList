import {API} from './baseService/index';

export async function getMovies(title) {
  try {
    const response = await API.get(`/search/movie?query=${title}`);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get movies', error);
  }
}

export async function getTrendingMovies() {
  try {
    const response = await API.get('/trending/movie/week');
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get trending movies', error);
  }
}

export async function discoverPopularMovies(categoryId) {
  try {
    const response = await API.get(
      `discover/movie?sort_by=popularity.desc&with_genres=${categoryId}`,
    );
    //console.log('response', response.results[0]);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error discover movies', error);
  }
}
