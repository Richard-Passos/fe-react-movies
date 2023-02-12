/* Style */
import { Container } from "./MovieCastStyle";
import Carousel from "../../../components/carousel/Carousel";

/* Logic */
import { useEffect, useState } from "react";
import { getCredits } from "../../../services/api/themoviedb";

export default function ContainerCast({ movie }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCredits(movie.id, setCast);
  }, [movie]);

  return (
    <Container>
      <Carousel subtitle="Elenco" itens={cast} />
    </Container>
  );
}