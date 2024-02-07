import { useLocation, useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TbArrowBigLeft } from 'react-icons/tb';
import * as SC from 'components/MovieInfo/MovieInfo.styled';
import { Box } from '../Box';
import { showPoster } from 'helpers/stubForImage';

export const MovieInfo = props => {
  const { film } = props;
  const [darkTheme] = useOutletContext();
  // console.log(darkTheme);
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';
  // console.log(location);
  return (
    <>
      <Box borderBottom="3px solid #b1a6a6">
        <SC.ButtonBox>
          {darkTheme ? (
            <SC.DarkLink to={backBtn}>
              <TbArrowBigLeft size={15} />
              Back
            </SC.DarkLink>
          ) : (
            <SC.LightLink to={backBtn}>
              <TbArrowBigLeft size={15} />
              Back
            </SC.LightLink>
          )}
        </SC.ButtonBox>

        {film && (
          <Box display="flex">
            <SC.ImageContainer>
              <img src={showPoster(film.poster_path)} alt={film.title} />
            </SC.ImageContainer>
            <Box p={4}>
              <SC.FilmTitle>{film.title}</SC.FilmTitle>
              <SC.FilmText>
                User Score: {Math.round(film.vote_average * 10)}%
              </SC.FilmText>
              <SC.OverviewTitle>Overview</SC.OverviewTitle>
              <SC.OverviewText>{film.overview}</SC.OverviewText>
              <SC.GenresTitle>Genres</SC.GenresTitle>
              <SC.GenresText>
                {film.genres.map(genre => genre.name).join(' ')}
              </SC.GenresText>
            </Box>
          </Box>
        )}
      </Box>
      <Box borderBottom="3px solid #796f6f">
        <SC.AdditionalTitle> Additional information </SC.AdditionalTitle>
        <ul>
          <SC.Cast>
            <SC.Link to="cast">Cast</SC.Link>
          </SC.Cast>
          <SC.Reviews>
            <SC.Link to="reviews">Reviews</SC.Link>
          </SC.Reviews>
        </ul>
      </Box>
    </>
  );
};

MovieInfo.propTypes = {
  film: PropTypes.object.isRequired,
};
