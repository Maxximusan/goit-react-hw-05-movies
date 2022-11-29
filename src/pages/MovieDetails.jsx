import { useParams, Outlet,  } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react'

import { APImovieDetails } from '../Api/API-themoviedborg';
import { MovieInfo } from 'components/MovieInfo/MovieInfo'

const MovieDetails = () => {

    const { movieId } = useParams();
    const [ film, setFilm ] = useState(null)

    useEffect(() => {
        
        APImovieDetails(movieId).then(result => {
             setFilm(result.data)
        console.log(result.data);
        }).catch(error => console.log(error))
        
    },[movieId])
   
       
    return (
        <>
            {film && <MovieInfo film={film} />}
           <Suspense>
            <Outlet />
           </Suspense>
            
            </>
    )
}

export default MovieDetails