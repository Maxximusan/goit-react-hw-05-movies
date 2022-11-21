// Ключ API (v3 auth)
// 03903974b6d688f171953b19c8d7c0eb

// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=03903974b6d688f171953b19c8d7c0eb

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzkwMzk3NGI2ZDY4OGYxNzE5NTNiMTljOGQ3YzBlYiIsInN1YiI6IjYzNzdkMzdiYzJmNDRiMDBkY2Q3ZTg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iK1N4LcxNyRlKxJiJcQuEsla-ZRwtOtyJQonyHTQpv8

import axios from 'axios';

const API_KEY = '03903974b6d688f171953b19c8d7c0eb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const APIfetchTrandingFilms = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const APIsearchMovie = searhQuery => {
  return axios.get(`
${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searhQuery}&language=en-US&page=1&include_adult=false
`);
};

export const APImovieDetails = id => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const APImovieCredits = id => {
  return axios.get(`
${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US
`);
};

export const APImovieRevievs = id => {
  return axios.get(`
${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1
`);
};
