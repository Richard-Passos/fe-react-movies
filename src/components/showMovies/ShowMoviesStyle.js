import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Colors } from "../../assets/Colors";

export const Container = styled.div`
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  min-height: 85vh;
  padding: 2rem 5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  section {
    width: 100%;

    display: flex;
    flex-direction: column;
  }
`;
export const ContainerMovies = styled(Swiper)`
  width: 100%;

  .listItem img{
    margin: 1.5rem;
    border: 2px solid transparent;
    border-radius: .5rem;
    opacity: 0.8;
    transition: all .5s ease;

      :hover {
        border-color: ${Colors.darkRed};
        opacity: 1;
        box-shadow: 0px 5px 15px rgba(220, 20, 60, 0.35) /*colors.darkRed*/;
        scale: 1.1;
        cursor: pointer;
      }
    }
`;

export const Subtitle = styled.span`
  font-size: 2rem;
  color: ${Colors.white};
`

export const MovieImg = styled.img`
  width: 150px;
  color: ${Colors.white}; // alt color
`