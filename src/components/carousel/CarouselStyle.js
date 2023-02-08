/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";
/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1.5rem 2.5rem;
  position: relative;

  display: flex;
  flex-direction: column;

  .subtitle {
    font-size: 2rem;
    color: ${Colors.white};
  }
`;

export const MainCarousel = styled.div`
  width: 92%;
  margin: 0 auto;
  padding: 1.5rem 1.4rem;
  overflow-x: auto;
  scroll-behavior: smooth;

  display: flex;
  gap: 2rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const Arrow = styled.div`
  color: ${Colors.darkRed};
  height: 72.5%;
  padding: 0 2rem;
  background-color: rgba(16, 17, 18, 0.7) /* Colors.darkGray */;
  font-size: 5rem;
  transition: all 0.2s ease;

  position: absolute;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;

  ${Container}:hover & {
    display: flex;
  }

  :hover {
    cursor: pointer;
    color: ${Colors.lightRed};
    background-color: rgba(23, 24, 25, 0.7);
  }

  @media screen and (max-width: 600px) {
    display: none !important;
  }

  &.prev {
    left: 1rem;
    border-radius: 1rem 0 0 1rem;
  }

  &.next {
    right: 1rem;
    border-radius: 0 1rem 1rem 0;
  }
`;