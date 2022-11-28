import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {APImovieCredits} from '../../Api/API-themoviedborg'

export const Cast = () => {

    
    const { movieId } = useParams();

    //  APImovieCredits(movieId).then(result => {
    //     console.log(result.data.cast);
    
    // })
    const [cast, setCast] = useState(null);

    useEffect(() => {
        APImovieCredits(movieId).then(result => {
            setCast(result.data.cast)
            console.log(result.data.cast);
        }).catch(error => console.log(error))
    }, [movieId]);
   
    return (
        <>
            {cast && (
                <div>
                    {cast.map(({id, profile_path, name, character}) => (
                        <div key={id}>
                            {profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
                            ) : (
                            <img src={'http://dummyimage.com/120'} alt={name}/>
                                )}
                        <p>{name}</p>
                        <p>Charaster: {character}</p>
                        </div>
                        
                        ))}
            </div>
            )}
        </>
    )
}