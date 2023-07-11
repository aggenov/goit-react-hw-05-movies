import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import  SearchBar  from "components/SearchBar/SearchBar";
import  MovieList  from "components/MovieList/MovieList";

import { getMoviesByQuery } from "api/featchTmdbApi";

import { RotatingLines } from "react-loader-spinner";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesSearch, setMoviesSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState('');

  const query = searchParams.get('query') ?? '';

   useEffect(() => {
     const fetch = async () => {
      setIsError("")
      if (query === '') {
        return;
      }
      setLoad(true);
      try {
        const dataMovies = await getMoviesByQuery(query);

        const movies = dataMovies.results;

        if (movies.length === 0) {
          setIsError(`Sorry, the movies you requested: "${query}" not found.`)
        }

        setMoviesSearch(movies);
        setInputValue('');
      } catch (error) {
        setIsError('Oops...Somesing went wrong');
      } finally {
        setLoad(false);
      }
    };

    fetch();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setIsError('Fill in the search field');
      return;
    }

    const normalizedValue = event.target.elements.query.value.toLowerCase();

    const nextSearchParams = inputValue !== ''
      ? { query: normalizedValue }
      : {};
    
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
          
          { isError === ""
            ? <MovieList movies={moviesSearch} />
            : <div style={{
            color: "lightgrey",
            fontWeight: "400",
            fontSize: "18px",
            paddingLeft: "24px",
            paddingTop:"20px"
        }}>{isError}</div>}
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
    </>
  )
}



export default Movies;