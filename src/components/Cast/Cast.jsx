import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APImovieCredits } from '../../Api/API-themoviedborg';
import * as SC from 'components/Cast/Cast.styled';
import { showActorPoster } from 'helpers/stubForImage';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    APImovieCredits(movieId)
      .then(result => {
        setCast(result.data.cast);
        // console.log(result.data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {cast && (
        <SC.ActorList>
          {cast.map(({ id, profile_path, name, character }) => (
            <SC.ActorItem key={id}>
              <img src={showActorPoster(profile_path)} alt={name} />

              <SC.Name>{name}</SC.Name>
              <SC.Charaster>Charaster: {character}</SC.Charaster>
            </SC.ActorItem>
          ))}
        </SC.ActorList>
      )}
    </>
  );
};

export default Cast;
