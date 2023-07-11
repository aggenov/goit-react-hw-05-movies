import { useState, useEffect } from "react";

import { getTrendingMovies } from "api/featchTmdbApi";

import { RotatingLines } from "react-loader-spinner";

import MovieList from "components/MovieList/MovieList";


const Home = () => {

  const [moviesSearch, setMoviesSearch] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      setLoad(true);
      try {
        const dataMovies = await getTrendingMovies();

        const movies = dataMovies.results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));

        setMoviesSearch(movies);
      } catch (error) {
        setIsError('Oops...Somesing went wrong');
      } finally {
        setLoad(false);
      }
    };
    
    fetch();
  }, []);
 
  
  return (
    <>

      <h1>Trending today</h1>

      {isError
        ? {isError}
        : <MovieList movies={moviesSearch} />
      }

      {' '}
      
      {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </>
  );
}

export default Home;