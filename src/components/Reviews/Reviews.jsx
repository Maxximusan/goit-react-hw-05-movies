import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {APImovieRevievs} from '../../Api/API-themoviedborg'

const Reviews = () => { 
    
    const { movieId } = useParams();
    
    //  APImovieRevievs(movieId).then(result => {
    //     console.log(result.data);
    
    // })
    
    const [review, setReview] = useState([]);
    
     useEffect(() => {
        APImovieRevievs(movieId).then(result => {
            setReview(result.data.results)
            console.log(result.data.results);
        }).catch(error => console.log(error))
     }, [movieId]);
    
    return (
        <>
            {review.length > 0
                ?
                (<div>
              {review.map(({ id, author, content }) => 
                  <div key={id}>
                      <h3> Autor: {author}</h3> 
                      <p>{ content}</p>    
                  </div>
                  
               )} 
                    </div>
                
                ) : (
                    <p>We dont have any reviews for this movie</p>
                    )
            }
        </>

    )

}

export default Reviews