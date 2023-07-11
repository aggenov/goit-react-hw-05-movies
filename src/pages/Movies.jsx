import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import  SearchBar  from "components/SearchBar/SearchBar";
import  MovieList  from "components/MovieList/MovieList";

import { getMoviesByQuery } from "api/featchTmdbApi";
import { RotatingLines } from "react-loader-spinner";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query') ?? '';
  const [load, setLoad] = useState(false);

   useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        return;
      }
      setLoad(true);
      try {
        const dataMovies = await getMoviesByQuery(query);

        const movies = dataMovies.results;

        if (movies.length === 0) {
          toast.error(`Sorry, the movies you requested: ${query} not found.`);
        }

        setMoviesSearch(movies);
        setInputValue('');
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };

    fetch();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Fill in the search field');
      return;
    }
    const normalizedValue = event.target.elements.query.value.toLowerCase();
    const nextSearchParams = inputValue !== '' ? { query: normalizedValue } : {};
    setSearchParams(nextSearchParams);

  };

  return (
    <>
      <section>
        <div>
          <SearchBar
            handleSubmit={handleSubmit}
            value={inputValue}
            setInputValue={setInputValue}
          />
          <MovieList movies={moviesSearch} />
        </div>
        {load && (
          <RotatingLines
            strokeColor="rgb(11, 127, 171)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
      </section>
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
    </>
  )
}



export default Movies;