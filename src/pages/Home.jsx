import { useState, useEffect } from "react";

import { getTrendingMovies } from "api/featchTmdbApi";
import { RotatingLines } from "react-loader-spinner";

import  TrendingMovieList  from "components/TrendingMovieList/TrendingMovieList";


const Home = () => {

  const [moviesTrending, setMoviesTrending] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => { 
    const fetch = async () => {
      setLoad(true);
      try {
        const dataMovies = await getTrendingMovies();

        const movies = dataMovies.results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));

        setMoviesTrending(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, [])
 
  
  return (
    <>
      <TrendingMovieList movies={moviesTrending} />{' '}
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