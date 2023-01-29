/* Styles */
import { ContainerMovies, Subtitle } from "./ShowMoviesStyle";
import { MovieImg } from "./ShowMoviesStyle";
import "swiper/css";
import "swiper/css/navigation";

/* Logic */
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"
import { Link } from "react-router-dom";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export default function SectionMovie({ subtitle, movieType }) {

  function showMoviesOnDOM(moviesType) {
    return moviesType.map(({ id, poster_path, title }) => (
      <SwiperSlide
        tag="li"
        key={id + "swiper_slide"}
        id={id + "swiper_slide"}
        className="listItem"
      >
        <Link to={`/detail/${id}`}>
          <MovieImg src={BASE_URL_IMG + poster_path} alt={title} />
        </Link>
      </SwiperSlide>
    ));
  }

  return (
    <section>
      <Subtitle>{subtitle}</Subtitle>
      <ContainerMovies 
        tag="div"
        wrapperTag="ul"
        modules={[Navigation]}
        slidesPerView={1}
        navigation
      >
        {showMoviesOnDOM(movieType)}
      </ContainerMovies>
    </section>
  );
}