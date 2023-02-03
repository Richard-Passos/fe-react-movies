/* Logic */
import axios from "axios"

export const getMovies = (setState, type) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=b681b7a1ecdbcf0bbb1bc98e9edd99ef&language=pt-BR&page=1&region=US`
    )
    .then(({ data }) => {
      setState(data.results);
    })
    .catch((error) => console.log(error));
};

export const getDetail = (movieId, setState) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=b681b7a1ecdbcf0bbb1bc98e9edd99ef&language=pt-BR`
    )
    .then(({ data }) => {
      setState(data)
    })
    .catch((error) => console.log(error));
};