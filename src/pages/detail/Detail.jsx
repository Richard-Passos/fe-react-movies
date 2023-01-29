/* Styles */
import Header from "../../components/global/header/Header";
import Footer from "../../components/global/footer/Footer";
import {
  ContainerDetails,
  ContainerImg,
  ContainerText,
  ContainerExtra,
} from "./containersStyle";
import { BtnTrailer, Link, ButtonHome } from "./buttonsStyle";

/* Logic */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../../api/axios";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [videoURL, setVideoURL] = useState("")

  function getURL(title) {
    /* Fix title */
    const titleString = JSON.stringify(title);
    let newTitle = "";
    for (let i = 0; i < titleString?.length; i++) {
      const currentSpace = titleString[i];

      if (currentSpace === '"') {
        newTitle += "";
      } else {
        if (currentSpace === " ") {
          newTitle += "+";
        } else {
          newTitle += titleString[i];
        }
      }
    }

    /* Trailer url */
    return `https://www.youtube.com/results?search_query=${newTitle}+trailer+oficial`;
  }

  useEffect(() => {
    getDetail(id, setMovie);
  }, [id])

  useEffect(() => {
    setVideoURL(getURL(movie.title));
  }, [movie])

  return (
    <>
      <Header />
      <ContainerDetails>
        <ContainerImg>
          <img src={BASE_URL_IMG + movie.poster_path} alt={movie.title} />
        </ContainerImg>

        <div className="spaceBetween">
          <ContainerText>
            <p className="title">{movie.title}</p>

            <div className="genres paddingLeft">
              {movie.genres?.map(({ name }) => (
                <span key={"key" + name} id={"id" + name} className="genre">
                  {name}
                </span>
              ))}
            </div>

            <div className="sinopse">
              <h4 className="subtitle">Sinopse</h4>
              <p className="description paddingLeft">
                {movie.overview || "Descrição não encontrada em protuguês"}
              </p>
            </div>
            <ContainerExtra>
              <div className="voteAverage">
                <span className="darkRed">Nota</span>
                <p>{movie.vote_average}</p>
              </div>
              <div className="runtime">
                <span className="darkRed">Tempo</span>
                <p>{movie.runtime}m</p>
              </div>
            </ContainerExtra>

            <div>
              <Link to={videoURL}>
                <BtnTrailer>Trailer</BtnTrailer>
              </Link>
            </div>
          </ContainerText>

          <Link to={"/"}>
            <ButtonHome>Go Home</ButtonHome>
          </Link>
        </div>
      </ContainerDetails>
      <Footer />
    </>
  );
}
