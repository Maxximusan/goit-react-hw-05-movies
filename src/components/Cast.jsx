// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {APImovieCredits} from '../Api/API-themoviedborg'

export const Cast = (id) => {

    const { movieId } = useParams();
    // const [cast, setCast] = useState(null);

    // useEffect(() => {
    //     APImovieCredits(id).then(result => {
    //         setCast(result)
    //         console.log(result);
    //     }).catch(error => console.log(error))
    // }, [id]);
    APImovieCredits(movieId).then(result => {
        console.log(result.data.cast);
    
    })
}