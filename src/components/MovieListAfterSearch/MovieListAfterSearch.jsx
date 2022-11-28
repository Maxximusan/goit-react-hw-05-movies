import PropTypes from "prop-types";
import { useLocation, Link } from 'react-router-dom'

export const MovieListAterSearch = (props) => {
    const { film } = props
    
    const location = useLocation()
    
    return (
        <>
            {film && film.length > 0
                ?
                (
                    <ul>
                            {film.map(({ title, id }) => (
                            <li key={id}>
                             <Link  to={`${id}`} state={{ from: location }}>
                                   {title}
                                    </Link>
                                    </li>
                        ))}
                    </ul>
                ) : (
                    <p> Please, enter a film title</p>
                
                    )}
                </>
    )

}

MovieListAterSearch.propTypes = {
    film: PropTypes.arrayOf(PropTypes.object)
};