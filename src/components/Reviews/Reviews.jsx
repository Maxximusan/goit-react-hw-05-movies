import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APImovieRevievs } from '../../Api/API-themoviedborg';
import * as SC from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    APImovieRevievs(movieId)
      .then(result => {
        setReview(result.data.results);
        console.log(result.data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        <div>
          {review.map(({ id, author, content }) => (
            <div key={id}>
              <SC.Title> Autor: {author}</SC.Title>
              <SC.P>{content}</SC.P>
            </div>
          ))}
        </div>
      ) : (
        <SC.P>We dont have any reviews for this movie</SC.P>
      )}
    </>
  );
};

export default Reviews;
