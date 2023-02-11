/* Logic */
import axios from "axios"

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export const getMovies = (setState, type) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=pt-BR&page=1&region=US`
    )
    .then(({ data }) => {
      setState(data.results);
    })
    .catch((error) => console.log(error));
};

export const getDetail = (movieId, setState) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
    )
    .then(({ data }) => {
      setState(data);
    })
    .catch((error) => console.log(error));
};

export const getVideo = (movieId, setState) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`
    )
    .then(({ data }) => {
      setState(data.results);
    })
    .catch((error) => setState(null));
};