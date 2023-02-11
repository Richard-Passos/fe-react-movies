/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerText = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 2rem;
  color: ${Colors.white};
  font-size: 1.4rem;
  position: relative;

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
    padding-left: 0.5rem;
  }

  .alignCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* CText border */
  ::before,
  ::after {
    content: "";
    background-color: ${Colors.darkRed};
    position: absolute;
  }
  ::before {
    width: .5rem;
    height: 15rem;
    top: 0;
    left: 0;
  }
  ::after {
    width: 15rem;
    height: .5rem;
    top: 0;
    left: 0;
  }

  /* Media Q */
  @media screen and (max-width: 1000px) {
    max-width: 55rem;
    margin: 0 auto;
  }
`;

export const Genre = styled.span`
  position: relative;

  :hover {
    color: ${Colors.lightRed};
  }

  /* Genre bottom border */
  ::before {
    content: "";
    height: .1rem;
    width: 100%;
    background-color: ${Colors.lightRed};
    position: absolute;
    bottom: -.2rem;
  }
`;

export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .subtitle {
    font-size: 2rem;

    span {
      color: ${Colors.darkRed};
    }
  }

  .description {
    max-height: 20rem;
    overflow-y: auto;
    padding-left: 0.5rem;
    line-height: 1.5;

    /* ScrollBar style */
    ::-webkit-scrollbar {
      width: 1rem;
      background-color: #000;
    }
    ::-webkit-scrollbar-track {
      background-color: ${Colors.darkGray};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${Colors.lightRed};
    }
  }
`;
