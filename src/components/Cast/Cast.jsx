import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {APImovieCredits} from '../../Api/API-themoviedborg'
import * as SC from 'components/Cast/Cast.styled'

const Cast = () => {

    
    const { movieId } = useParams();

    
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
                <SC.ActorList>
                    {cast.map(({id, profile_path, name, character}) => (
                        <SC.ActorItem key={id}>
                            {profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                            ) : (
                            <img src={'https://dummyimage.com/200'} alt={name}/>
                                )}
                        <SC.Name>{name}</SC.Name>
                        <SC.Charaster>Charaster: {character}</SC.Charaster>
                        </SC.ActorItem>
                        
                        ))}
            </SC.ActorList>
            )}
        </>
    )
}

export default Cast