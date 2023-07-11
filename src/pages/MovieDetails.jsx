import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { Toaster } from 'react-hot-toast';
import { getMovieInfo } from 'api/featchTmdbApi';

import MovieItem from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await getMovieInfo(movieId);
        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
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
      {movie && <MovieItem movie={movie} />}

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgb(11, 127, 171)',
            color: '#fff',
          },
        }}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;