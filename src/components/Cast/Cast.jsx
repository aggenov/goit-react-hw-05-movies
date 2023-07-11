import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

import { getMovieCast } from 'api/featchTmdbApi';

import CastList from 'components/CastList/CastList';
 
const Cast = () => {
  const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoad(true);
      
      try {
        const dataMovie = await getMovieCast(movieId);

        const actors = dataMovie.cast.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          })
        );

        if (actors.length === 0) {
          setIsError('No actors list');
        }

        setActors(actors);
      } catch (error) {
        setIsError(error.message)
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {actors.length !==0
        ? <CastList actors={actors} />
        : <div style={{
            color: "lightgrey",
            fontWeight: "400",
            fontSize: "14px",
            paddingLeft: "40px",
            paddingTop:"20px"
        }}>{isError}</div>}
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
};


export default Cast;