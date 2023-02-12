/* Style */
import { ContainerMain } from "./containersStyle/CMain";
import { ContainerImg } from "./containersStyle/CImg";
import ImgNotFound from "../../../assets/imgs/imgNotFound.png";
import {
  ContainerText,
  Sinopse,
  Genre,
} from "./containersStyle/CTextStyle";
import { ContainerExtra } from "./containersStyle/CExtra";
import { ContainerButtons, Btn } from "./containersStyle/CButtons";
import { Link } from "react-router-dom";

/* Logic */
import { useEffect, useState } from "react";
import { getVideo } from "../../../services/api/themoviedb";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
const BASE_URL_VIDEO = "https://www.youtube.com/watch?v=";

export default function DetailCDetails({ movie }) {
  const [video, setVideo] = useState([]);
  const [movieReleaseDate , setMovieReleaseDate] = useState(null)

    useEffect(() => {
      getVideo(movie.id, setVideo);
      setMovieReleaseDate(
        `${new Date(
          movie.release_date
        ).getFullYear()}` /* Remove console.log error bug */
      );
    }, [movie]);

  return (
    <ContainerMain>
      <ContainerImg>
        <img
          src={
            movie?.poster_path ? BASE_URL_IMG + movie.poster_path : ImgNotFound
          }
          alt={movie.title}
        />
      </ContainerImg>

      <ContainerText>
        <p className="title">{movie.title}</p>

        <div className="genres">
          {movie.genres?.map(({ name }) => (
            <Genre key={"key" + name} id={"id" + name}>
              {name}
            </Genre>
          ))}
        </div>

        <Sinopse>
          <p className="subtitle">
            <span>
              Sin<span className="radiant">o</span>
            </span>
            pse
          </p>

          <p className="description">
            {movie.overview || "Descrição não encontrada em protuguês"}
          </p>
        </Sinopse>

        <ContainerExtra>
          <div>
            <span className="darkRed">Nota</span>
            <p>{movie.vote_average?.toFixed(1)} / 10</p>
          </div>

          <div>
            <span className="darkRed">Duração</span>
            <p>{movie.runtime}m</p>
          </div>

          <div>
            <span className="darkRed">Ano do lançamento</span>
            <p>{movieReleaseDate}</p>
          </div>
        </ContainerExtra>

        <ContainerButtons>
          {video && (
            <Link
              to={
                video[1]?.key !== undefined
                  ? BASE_URL_VIDEO + video[1]?.key
                  : BASE_URL_VIDEO + video[0]?.key
              }
            >
              <Btn className="btnTrailer">Trailer</Btn>
            </Link>
          )}

          <Link to={"/"}>
            <Btn>Go Home</Btn>
          </Link>
        </ContainerButtons>
      </ContainerText>
    </ContainerMain>
  );
}
