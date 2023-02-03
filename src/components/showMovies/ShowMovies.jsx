/* Style */
import { Container } from "./ShowMoviesStyle";
import SectionMovie from "./SectionMovie";

/* Logic */
import { useEffect, useState } from "react";
import { getMovies } from "../../services/api/themoviedb";

export default function ShowMovies() {
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
    <Container>
      <SectionMovie subtitle="Popular" movieType={popularMovies} />
      <SectionMovie subtitle="Melhores avaliados" movieType={topRatedMovies} />
      <SectionMovie subtitle="Em cartaz" movieType={cinemaMovies} />
      <SectionMovie subtitle="Em breve" movieType={comingSoonMovies} />
    </Container>
  );
}