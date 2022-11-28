// import { useState, useEffect } from 'react';
import { useParams, Outlet,  } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react'

// import { TbArrowBigLeft } from "react-icons/tb";

import { APImovieDetails } from '../Api/API-themoviedborg';
import { MovieInfo } from 'components/MovieInfo/MovieInfo'

const MovieDetails = () => {

    const { movieId } = useParams();
    const [ film, setFilm ] = useState(null)

    useEffect(() => {
        
        APImovieDetails(movieId).then(result => {
             setFilm(result.data)
        // console.log(result);
        console.log(result.data);
        }).catch(error => console.log(error))
        
    },[movieId])
   
    //  const location = useLocation();
    // const backBtn = location.state?.from ?? '/';
    
    return (
        <>
            {film && <MovieInfo film={film} />}
           <Suspense>
            <Outlet />
           </Suspense>
             {/* <div>Now showing product with id -  {movieId}</div>
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
                </ul> */}
            {/* <Outlet /> */}
            </>
    )
}

export default MovieDetails