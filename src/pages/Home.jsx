import { useState, useEffect } from 'react';

import { APIfetchTrandingFilms } from '../Api/API-themoviedborg';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { Text } from 'pages/Home.styles';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    async function FetchTrendingMovies() {
      try {
        const data = await APIfetchTrandingFilms();
        setFilm(data.data.results);
        // console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchTrendingMovies();
    // APIfetchTrandingFilms()
    //   .then(result => {
    //     setFilm(result.data.results);
    //     console.log(result.data);
    //   })
    //   .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Box bg="#ff6e6e">
        <Text>Trending today</Text>
      </Box>
      {!film ? <Loader /> : <TrendingMoviesList film={film} />}
    </>
  );
};
