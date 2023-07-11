import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { List, Item, FilmLink } from './MovieList.styled';

 
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (

    <section style={{ paddingBottom: "40px" }}>
      
      {movies.length > 0 && (
       <List>
      {movies.map(movie => (
        <Item key={movie.id}>
           <FilmLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title ?? movie.name}
          </FilmLink>
        </Item>
      ))}
    </List>
      )}
    </section>
 
  )
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};