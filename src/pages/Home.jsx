import styled from 'styled-components'
// import { useState } from 'react'
import { APIfetchTrandingFilms } from '../Api/API-themoviedborg'

const Text = styled.h1`
    color: ${p => p.theme.colors.accent};
    font-family: ${p => p.theme.fonts.monospace};
    margin: ${ p => p.theme.space[3]}px;
    font-size: ${ p => p.theme.fontSizes.l};
`
export const Home = () => {

    // const [film, setFilm] = useState([]);
    APIfetchTrandingFilms().then((result) => {
        console.log(result);
       console.log(result.data); 
    })

    return(
        <Text>Trending today</Text>
        )
}