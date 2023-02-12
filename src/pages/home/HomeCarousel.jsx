/* Style */
import { Container } from "./HomeCarouselStyle";
import Loading from "../../components/loading/Loading";
import Carousel from "../../components/carousel/Carousel";

/* Logic */
import { useEffect, useState } from "react";
import { getMovies } from "../../services/api/themoviedb";

export default function HomeCarousel() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [cinemaMovies, setCinemaMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  let stopScrollEvent = 0

   const loadMovies = () => { /* Better loading performing */
     if (window.scrollY > 200 && stopScrollEvent < 1) {
       getMovies(setCinemaMovies, "now_playing");
       stopScrollEvent++;
     } else if (window.scrollY > 300 && stopScrollEvent < 2) {
       getMovies(setComingSoonMovies, "upcoming");
       stopScrollEvent++;
     }
   }

  useEffect(() => {
    getMovies(setPopularMovies, "popular");
    getMovies(setTopRatedMovies, "top_rated");

    window.addEventListener("scroll", loadMovies);
    return () => window.removeEventListener("scroll", loadMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {!topRatedMovies.length ? (
        <Loading />
      ) : (
        <>
          <Carousel subtitle="Populares" itens={popularMovies} />
          <Carousel subtitle="Melhores avaliados" itens={topRatedMovies} />
          <Carousel subtitle="Em cartaz" itens={cinemaMovies} />
          <Carousel subtitle="Em breve" itens={comingSoonMovies} />
        </>
      )}
    </Container>
  );
}