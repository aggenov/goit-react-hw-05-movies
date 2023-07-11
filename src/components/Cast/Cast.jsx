import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

import { getMovieCast } from 'api/featchTmdbApi';

import CastList from 'components/CastList/CastList';
 
const Cast = () => {
  const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(false);

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
          toast.error(`No cast.`);
        }

        setActors(actors);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {actors
        ? <CastList actors={actors} />
        : <div>No actors list</div>}
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