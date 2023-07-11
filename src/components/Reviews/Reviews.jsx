import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

import ReviewList from 'components/ReviewList/ReviewList';

import { getMovieReviews } from 'api/featchTmdbApi';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState('')

  const { movieId } = useParams();

  useEffect(()=> {
    const fetch = async() => {
      setLoad(true);

      try {
        const dataMovie = await getMovieReviews(movieId);

        const reviews = dataMovie.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        if (reviews.length === 0) {
          setIsError(`No reviews`)
        }
        
        setReviews(reviews);
      }
      catch (error) {
        setIsError(error.message)
      }
      finally {
        setLoad(false);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>
     {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {reviews.length !== 0
        ? < ReviewList reviews={reviews} isError={isError} />
        : <div style={{
            color: "lightgrey",
            fontWeight: "400",
            fontSize: "14px",
            paddingLeft: "40px",
            paddingTop:"20px"
        }}>{ isError }</div>
        }
    </>
  ) 
};

export default Reviews;