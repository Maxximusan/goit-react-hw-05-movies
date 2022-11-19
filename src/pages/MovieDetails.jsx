// import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { APImovieDetails } from '../Api/API-themoviedborg';

export const MovieDetails = () => {

    const { movieId } = useParams();
    const [ film, setFilm ] = useState(null)

    useEffect(() => {
        
        APImovieDetails(movieId).then(result => {
             setFilm(result.data)
        // console.log(result);
        console.log(result.data);
        }).catch(error => console.log(error))
        
    },[movieId])
   
    

    return (
        <>
            <div>Now showing product with id -  {movieId}</div>
            {film && (
                <div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={ film.title} />
                    </div>
                    <div>
                        <h1>{film.title}</h1>
                        <p>User Score: {film.vote_average}%</p>
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
                    <Link to="review">Reviews</Link>
                    </li>
                </ul>
            <Outlet />
            
            </>
    )
}