import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { APIfetchTrandingFilms } from '../Api/API-themoviedborg'
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList'

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
                console.log(result.data);
        }).catch(error => console.log(error))
              
    }, []);

   
    return (
        <>
        <Text>Trending today</Text>
            <TrendingMoviesList film={ film } />
            </>
        )
}