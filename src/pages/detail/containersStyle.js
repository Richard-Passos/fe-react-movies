import styled from "styled-components";
import { Colors } from "../../assets/Colors";

export const ContainerDetails = styled.div`
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: 3.5rem;
  border-radius: 0.5rem;
  height: fit-content;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3rem 5rem;

  .spaceBetween {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  .paddingLeft {
    padding-left: 0.5rem;
  }

  .darkRed {
    color: ${Colors.darkRed};
    transition: color .2s ease;

    :hover {
      color: ${Colors.lightRed};
    }
  }
  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContainerImg = styled.picture`
  width: 100%;
  max-width: 40rem;

  img {
    width: 100%;
    border: 2px solid ${Colors.darkRed};
    border-radius: 0.5rem;
    transition: all 0.5s ease;

    :hover {
      box-shadow: 0px 5px 15px rgba(220, 20, 60, 0.35) /*colors.darkRed*/;
      scale: 1.1;
      cursor: pointer;
    }
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 50px 0;
  padding: 2rem;
  color: ${Colors.lightGray};
  font-size: 1.4rem;
  position: relative;

  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    font-size: 3.5rem;

  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 1.2rem;

    .genre {
      position: relative;

      :hover {
        color: ${Colors.lightRed};
      }

      ::before {
        content: "";
        height: 1px;
        width: 100%;
        background-color: ${Colors.lightRed};
        position: absolute;
        bottom: -2px;
      }
    }
  }

  .sinopse {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 2rem;

    .subtitle {
      font-size: 2rem;
    }

    .description {
      max-height: 200px;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    max-width: 55rem;
    margin: 0 auto;
  }

  ::before,
  ::after {
    content: "";
    background-color: ${Colors.darkRed};
    position: absolute;
  }
  ::before {
    width: 5px;
    height: 150px;
    top: 0;
    left: 0;
  }
  ::after {
    width: 150px;
    height: 5px;
    top: 0;
    left: 0;
  }
`;

export const ContainerExtra = styled.div`
  width: 100%;
  max-width: 15rem;
  padding: 1rem;
  border: 1px dashed ${Colors.darkRed};
  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  p {
    margin-top: .5rem;
  }
`;

