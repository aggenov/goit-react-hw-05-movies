import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import ReviewList from 'components/ReviewList/ReviewList';
import { getMovieReviews } from 'api/featchTmdbApi';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [load, setLoad] = useState(false);

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
          toast.error(`No reviews.`);
        }
        
        setReviews(reviews);
      }
      catch (error) {
        console.log(error.message);
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
    {reviews && <ReviewList reviews={reviews} />}
    </>
  ) 
};

export default Reviews;