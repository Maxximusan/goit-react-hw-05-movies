import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { APIsearchMovie } from '../Api/API-themoviedborg';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieListAterSearch } from 'components/MovieListAfterSearch/MovieListAfterSearch';

const Movies = () => {
  const [film, setFilm] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const searchFilm = event => {
    setSearchParam({ query: event });
  };

  useEffect(() => {
    const query = searchParam.get('query') ?? '';
    if (query) {
      APIsearchMovie(query).then(result => {
        if (result.data.results.length === 0 && isFormSubmit) {
          return toast.info('Sorry, not found movies by your request');
        }
        setFilm(result.data.results);
        console.log(result.data);
      });
    }
  }, [searchParam, isFormSubmit]);

  return (
    <>
      <SearchForm onSearch={searchFilm} setIsFormSubmit={setIsFormSubmit} />
      <MovieListAterSearch film={film} />
    </>
  );
};

export default Movies;
