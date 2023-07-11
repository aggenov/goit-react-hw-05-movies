import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { getMovieInfo } from 'api/featchTmdbApi';

import MovieItem from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState('');

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await getMovieInfo(movieId);
        setMovie(dataMovie);
      } catch (error) {
        // console.log(error.message);
        setIsError('No movies')
        
        navigate('/', { replace: true });
      }
    };

    fetch();
  }, [movieId, navigate]);

  if (!movie) {
    return null;
  }

  return (
    <>
      {movie.length !== 0
        ? <MovieItem movie={movie} />
        : <div style={{
            color: "lightgrey",
            fontWeight: "400",
            fontSize: "14px",
            paddingLeft: "40px",
            paddingTop:"20px"
        }}>{isError}</div>}
      
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;