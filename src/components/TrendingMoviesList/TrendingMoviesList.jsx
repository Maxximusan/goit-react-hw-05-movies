import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from 'components/TrendingMoviesList/TrendingMoviesList.styled';
import { showPoster } from '../../helpers/stubForImage';

export const TrendingMoviesList = props => {
  const { film } = props;

  // console.log(film);
  if (!film) {
    return;
  }

  return (
    <>
      <SC.Gallery>
        {film.length > 0 &&
          film.map(({ title, id, poster_path }) => (
            <SC.Li key={id}>
              <Link to={`/movies/${id}`}>
                <SC.Card>
                  <img
                    src={showPoster(poster_path)}
                    alt={title}
                    width="300"
                    height="450"
                  />
                  <SC.Title>{title}</SC.Title>
                </SC.Card>
              </Link>
            </SC.Li>
          ))}
      </SC.Gallery>
    </>
  );
};

TrendingMoviesList.propTypes = {
  film: PropTypes.arrayOf(PropTypes.object),
};
