/* Style */
import { Container } from "./HomeCarouselStyle";
import Carousel from "../../components/carousel/Carousel";

/* Logic */
import { useEffect, useState } from "react";
import { getMovies } from "../../services/api/themoviedb";

export default function HomeCarousel() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [cinemaMovies, setCinemaMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  useEffect(() => {
    getMovies(setPopularMovies, "popular");
    getMovies(setTopRatedMovies, "top_rated");
    getMovies(setCinemaMovies, "now_playing");
    getMovies(setComingSoonMovies, "upcoming");
  }, []);

  return (
    <Container className="bgImg">
      <Carousel subtitle="Populares" movies={popularMovies} />
      <Carousel subtitle="Melhores avaliados" movies={topRatedMovies} />
      <Carousel subtitle="Em cartaz" movies={cinemaMovies} />
      <Carousel subtitle="Em breve" movies={comingSoonMovies} />
    </Container>
  );
}