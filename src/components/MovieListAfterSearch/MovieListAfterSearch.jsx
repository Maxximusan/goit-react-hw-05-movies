import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import * as SC from 'components/MovieListAfterSearch/MovieListAfterSearch.styled';
import { Box } from 'components/Box';
import { showPoster } from 'helpers/stubForImage';

export const MovieListAterSearch = props => {
  const { film } = props;

  const location = useLocation();

  return (
    <Box height="100vw">
      {film && film.length > 0 ? (
        <SC.Gallery>
          {film.map(({ title, id, poster_path }) => (
            <SC.Li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <SC.Card>
                  <img
                    src={showPoster(poster_path)}
                    alt={title}
                    width="250"
                    height="330"
                  />
                  <SC.Title>{title}</SC.Title>
                </SC.Card>
              </Link>
            </SC.Li>
          ))}
        </SC.Gallery>
      ) : (
        <SC.P> We are waiting for your choose...</SC.P>
      )}
    </Box>
  );
};

MovieListAterSearch.propTypes = {
  film: PropTypes.arrayOf(PropTypes.object),
};
