import api from './api';

export const getPopularMovies = async () => {
    const response = await api.get(`movie/popular?language=pt-BR`);
    return response.data.results;
}

export const getListOfGenres = async () => {
    const response = await api.get(`genre/movie/list?language=pt-BR`);
    return response.data.genres;
}

export const getMoviesOfCategory = async (id) => {
    const response = await api.get(`discover/movie?with_genres=${id}&language=pt-BR`);
    return response.data.results;
}

export const getMoviesTopRated = async () => {
    const response = await api.get(`movie/top_rated?language=pt-BR`);
    return response.data.results;
}

export const getMoviesUpcoming = async () => {
    const response = await api.get(`movie/upcoming?language=pt-BR`);
    return response.data.results;
}

export const getMoviesTrending = async () => {
    const response = await api.get(`trending/movie/week?language=pt-BR`);
    return response.data.results;
}

export const getMovieId = async (id) => {
    const response = await api.get(`movie/${id}?language=pt-BR`);
    return response.data;
}

export const getAtors = async (id) => {
    const response = await api.get(`movie/${id}/credits`);
    return response.data;
}

export const getRecommendations = async (id) => {
    const response = await api.get(`movie/${id}/recommendations`);
    return response.data.results;
}

export const searchMovies = async (query) => {
  const response = await api.get(`/search/movie?language=pt-BR&query=${query}`);
  return response.data.results;
};