import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export const TrendingMoviesList = (props) => {
    const { film } = props

      if (!film) {
        return
    }

    return (
        <>
            <ul>
                {film.length > 0 && film.map(({ title, id }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};


TrendingMoviesList.propTypes = {
    film: PropTypes.arrayOf(PropTypes.object)
};