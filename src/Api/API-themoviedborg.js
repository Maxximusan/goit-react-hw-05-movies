// Ключ API (v3 auth)
// 03903974b6d688f171953b19c8d7c0eb

// новый ключ от 15.09.23
// 46ab2e1e7ed5243c494f829ac605818f

// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=03903974b6d688f171953b19c8d7c0eb

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzkwMzk3NGI2ZDY4OGYxNzE5NTNiMTljOGQ3YzBlYiIsInN1YiI6IjYzNzdkMzdiYzJmNDRiMDBkY2Q3ZTg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iK1N4LcxNyRlKxJiJcQuEsla-ZRwtOtyJQonyHTQpv8

// новый ключ от 15.09.23
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiMmUxZTdlZDUyNDNjNDk0ZjgyOWFjNjA1ODE4ZiIsInN1YiI6IjYzNzdkMzdiYzJmNDRiMDBkY2Q3ZTg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5GYZQpJtDoIh_HQ4CFplzV6ivFHEHp3TEr4vwqP44o

import axios from 'axios';

const API_KEY = '46ab2e1e7ed5243c494f829ac605818f';
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
