/* Styles */
import { Container, MainCarousel, Arrow } from "./CarouselStyle";
import CreateItens from "./CreateItens";

/* Logic */
import { useState, useEffect, useRef } from "react";

export default function SectionMovie({ subtitle, movies }) {
  const carousel = useRef(null);

  const [scrollLeftState, setScrollLeftState] = useState(0);

  function handleArrows(e) {
    const { current } = carousel;
    const { scrollLeft } = current;

    if (e.target.classList.contains("next")) {
      setScrollLeftState(scrollLeft + current.offsetWidth);
    } else {
      setScrollLeftState(scrollLeft - current.offsetWidth);
    }
  }

  useEffect(() => {
    carousel.current.scrollLeft = scrollLeftState;
  }, [scrollLeftState]);

  return (
    <Container>
      <p className="subtitle">{subtitle}</p>

      <MainCarousel ref={carousel}>
        <CreateItens movies={movies} />

        <Arrow className="prev" onClick={handleArrows}>
          {"<"}
        </Arrow>
        <Arrow className="next" onClick={handleArrows}>
          {">"}
        </Arrow>
      </MainCarousel>
    </Container>
  );
}
