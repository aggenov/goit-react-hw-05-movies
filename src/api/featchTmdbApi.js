import axios from 'axios';
import { BASE_URL, API_KEY } from './cosntants';

export async function getTrendingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieInfo(movieId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
