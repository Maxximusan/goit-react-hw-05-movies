export const showPoster = posterFromApi => {
  if (posterFromApi === null) {
    return 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';
  }
  return `https://image.tmdb.org/t/p/w300${posterFromApi}`;
};

export const showActorPoster = posterFromApi => {
  if (posterFromApi === null) {
    return 'https://www.movienewsletters.net/photos/000000H1.jpg';
  }
  return `https://image.tmdb.org/t/p/w200${posterFromApi}`;
};
