import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


import {
  DetailsSection,
  Info,
  Name,
  Description,
  Text,
  Genres,
  GenresItem,
  LinkList,
  LinkItem,
  LinkMovie,
  Wraper,
  BtnGoBack,
} from './MovieItem.styled';

export const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

const MovieItem = ({ movie }) => {
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';
  const backLinkHref = location.state?.from ?? '/';

  const { title, release_date, overview, genres, vote_average, poster_path } = movie;

  return (
    <DetailsSection>
      <BtnGoBack to={backLinkHref}>Go back</BtnGoBack>
      <Wraper >
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            alt={title}
            width="250px"
            height="375px"
          />
        
        <Info>
          <Name>
            {release_date ? `${title} (${new Date(release_date).getFullYear()})` : title}
          </Name>
          <Description>
            {vote_average
              ? `User Score: ${Math.round(vote_average) * 10}% `
              : 'User Score: no score'}
          </Description>
          <Text>Overview:</Text>
          <Description>
            {overview
              ? overview
              : 'No overview'}
          </Description>
          <Text>Genres:</Text>
          <Genres>
            {genres.length !== 0
              ? genres.map(el => (
                <GenresItem key={el.id}>{el.name}</GenresItem>
                ))
              : "No genres"
            }
          </Genres>
        </Info>
      </Wraper>

      <Text>Additional information</Text>
      
      <LinkList>
          <LinkItem>
            <LinkMovie to="cast" state={{ from: backLinkHref }}>
              Cast
            </LinkMovie>
          </LinkItem>
          <li>
            <LinkMovie to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LinkMovie>
          </li>
      </LinkList>
      
    </DetailsSection>
  );
};

export default MovieItem;


MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};