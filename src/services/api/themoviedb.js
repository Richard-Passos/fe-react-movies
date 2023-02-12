/* Logic */
import axios from "axios";

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export const getMovies = async (setState, type) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=pt-BR&page=1&region=US`
    )
    .then(({ data }) => {
      setState(data.results);
    })
    .catch((error) => console.log(error));
};

export const getDetail = async (movieId, setState) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
    )
    .then(({ data }) => {
      setState(data);
    })
    .catch((error) => console.log(error));
};

export const getVideo = async (movieId, setState) => {
  movieId /* Remove console.log error bug */ &&
    (await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`
      )
      .then(({ data }) => {
        setState(data.results);
      })
      .catch((error) => setState(null)));
};

export const getCredits = async (movieId, setState) => {
  movieId /* Remove console.log error bug */ &&
    (await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`
      )
      .then(({ data }) => {
        setState(data.cast);
      })
      .catch((error) => console.log(error)));
};
