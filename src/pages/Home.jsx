import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { APIfetchTrandingFilms } from '../Api/API-themoviedborg'
// import { Link } from './App.styled'
import { Link } from "react-router-dom"

const Text = styled.h1`
    color: ${p => p.theme.colors.accent};
    font-family: ${p => p.theme.fonts.monospace};
    margin: ${ p => p.theme.space[3]}px;
    font-size: ${ p => p.theme.fontSizes.l};
`
export const Home = () => {

    const [film, setFilm] = useState([]);

    useEffect(() => {
        APIfetchTrandingFilms().then((result) => {
            setFilm(result.data.results)
            // console.log(result);
            console.log(result.data);
        }).catch(error => console.log(error))
            
        

    }, []);

    // if (!film) {
    //     return
    // }
  

    return (
        <>
        <Text>Trending today</Text>
        <ul>
                {film.length > 0 && film.map(({title, id})=> (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))} 
            </ul>
            </>
        )
}