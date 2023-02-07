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
  margin: 0 4rem;
  padding: 1.5rem 0;
  overflow-x: auto;
  scroll-behavior: smooth;

  display: flex;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const Arrow = styled.div`
  color: ${Colors.darkRed};
  height: 80px;
  padding: 0 2.5rem;
  border-radius: 100%;
  font-size: 5rem;
  transition: all 0.2s ease;
  position: absolute;
  top: 40%;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    color: ${Colors.lightRed};
    background-color: rgba(16, 17, 18, 0.35) /* Colors.darkGray */;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;