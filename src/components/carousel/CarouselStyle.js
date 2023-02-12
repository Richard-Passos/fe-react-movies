/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";
/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1.5rem 2.5rem;
  background-color: rgba(${Colors.black}, 0.5);
  border-radius: 1rem;

  position: relative;

  display: flex;
  flex-direction: column;

  .subtitle {
    font-size: 2.5rem;
  }
`;

export const MainCarousel = styled.div`
  width: 92%;
  padding: 1.5rem 1.4rem;
  overflow-x: auto;
  scroll-behavior: smooth;

  display: flex;
  gap: 2rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Arrow = styled.div`
  height: 78%;
  padding: 0 2rem;
  background-color: rgb(${Colors.darkGray});
  color: rgb(${Colors.lightRed});
  font-size: 5rem;
  transition: all 0.2s ease;

  position: absolute;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    ${Container}:hover & {
      display: flex;
    }
  }

  :hover {
    cursor: pointer;
    color: rgb(${Colors.darkGray});
    background-color: rgb(${Colors.lightRed});
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
