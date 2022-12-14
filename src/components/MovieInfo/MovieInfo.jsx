import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import { TbArrowBigLeft } from "react-icons/tb";
import * as SC from 'components/MovieInfo/MovieInfo.styled'
import { Box } from '../Box'


export const MovieInfo = (props) => {
    const { film } = props

         const location = useLocation();
    const backBtn = location.state?.from ?? '/';

    return (
        <>
        <Box borderBottom="3px solid #b1a6a6">
            <SC.ButtonBox>
              <SC.Link to={backBtn}><TbArrowBigLeft size={15} />Back</SC.Link>
            </SC.ButtonBox>

            {film && (
                <Box display='flex'>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={ film.title} />
                    </div>
                    <Box p={4}>
                        <SC.FilmTitle>{film.title}</SC.FilmTitle>
                        <SC.FilmText>User Score: {Math.round(film.vote_average * 10)}%</SC.FilmText>
                        <SC.OverviewTitle>Overview</SC.OverviewTitle>
                        <SC.OverviewText>{film.overview}</SC.OverviewText>
                        <SC.GenresTitle >Genres</SC.GenresTitle >
                        <SC.GenresText>{ film.genres.map(genre => genre.name).join(' ')}</SC.GenresText>
                    </Box>
                </Box>
            )}
       </Box>
        <Box borderBottom="3px solid #796f6f">
            <h3> Additional information </h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                    </li>
             </ul>
       </Box>
            </>
    )
}

MovieInfo.propTypes = {
  film: PropTypes.object.isRequired,
};