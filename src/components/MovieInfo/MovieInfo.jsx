import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

import { TbArrowBigLeft } from "react-icons/tb";

export const MovieInfo = (props) => {
    const { film } = props

         const location = useLocation();
    const backBtn = location.state?.from ?? '/';

    return (
        <>
        
            <div>
              <Link to={backBtn}><TbArrowBigLeft size={15} />Back</Link>
            </div>

            {film && (
                <div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={ film.title} />
                    </div>
                    <div>
                        <h1>{film.title}</h1>
                        <p>User Score: {Math.round(film.vote_average * 10)}%</p>
                        <h2>Overview</h2>
                        <p>{film.overview}</p>
                        <h3>Genres</h3>
                        <p>{ film.genres.map(genre => genre.name).join(' ')}</p>
                    </div>
                </div>
            )}


            <h3> Additional information </h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                    </li>
            </ul>
            </>
    )
}

MovieInfo.propTypes = {
  film: PropTypes.object.isRequired,
};