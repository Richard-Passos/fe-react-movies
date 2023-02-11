/* Style */
import Header from "../../components/global/header/Header";
import Footer from "../../components/global/footer/Footer";
import { ContainerDetails } from "./containersStyle/CDetails";
import { ContainerImg } from "./containersStyle/CImg";
import { ContainerText, Sinopse, Genre } from "./containersStyle/CTextStyle";
import { ContainerExtra } from "./containersStyle/CExtra";
import { BtnTrailer, ButtonHome } from "./buttonsStyle";
import ImgNotFound from "../../assets/imgs/imgNotFound.png";

/* Logic */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail, getVideo } from "../../services/api/themoviedb";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
const BASE_URL_VIDEO = "https://www.youtube.com/watch?v=";

export default function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getDetail(id, setMovie);
  }, [id]);

  useEffect(() => {
    getVideo(movie.id, setVideo);
  }, [movie]);

  return (
    <>
      <Header detailPage={true}/>
      <ContainerDetails className="bgImg">
        <ContainerImg>
          <img
            src={
              movie?.poster_path
                ? BASE_URL_IMG + movie.poster_path
                : ImgNotFound
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
            <p className="subtitle">Sinopse</p>

            <p className="description">
              {movie.overview || "Descrição não encontrada em protuguês"}
            </p>
          </Sinopse>

          <ContainerExtra>
            <div>
              <span className="darkRed">Nota</span>
              <p>{movie.vote_average?.toFixed(1)}</p>
            </div>

            <div>
              <span className="darkRed">Tempo</span>
              <p>{movie.runtime}m</p>
            </div>
          </ContainerExtra>

          {!video ? (
            <></>
          ) : (
            <div>
              <Link
                to={
                  video[1]?.key !== undefined
                    ? BASE_URL_VIDEO + video[1]?.key
                    : BASE_URL_VIDEO + video[0]?.key
                }
              >
                <BtnTrailer>Trailer</BtnTrailer>
              </Link>
            </div>
          )}

          <div className="alignCenter">
            <Link to={"/"}>
              <ButtonHome>Go Home</ButtonHome>
            </Link>
          </div>
        </ContainerText>
      </ContainerDetails>
      <Footer />
    </>
  );
}
