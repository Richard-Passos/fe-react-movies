/* Style */
import Header from "../../components/global/header/Header";
import Loading from "../../components/loading/Loading";
import { ContainerMain } from "./DetailStyle";
import ContainerDetails from "./movieDetails/MovieDetails";
import ContainerCast from "./movieCast/movieCast";
import Footer from "../../components/global/footer/Footer";

/* Logic */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../../services/api/themoviedb";

export default function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail(id, setMovie);
  }, [id]);

  return (
    <>
      <Header detailPage={true} />
      {!movie ? (
        <Loading />
      ) : (
        <ContainerMain>
          <ContainerDetails movie={movie} />
          <ContainerCast movie={movie} />
        </ContainerMain>
      )}
      <Footer />
    </>
  );
}
