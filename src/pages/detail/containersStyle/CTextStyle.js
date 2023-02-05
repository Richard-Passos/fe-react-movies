/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerText = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 2rem;
  color: ${Colors.lightGray};
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
    height: 1px;
    width: 100%;
    background-color: ${Colors.lightRed};
    position: absolute;
    bottom: -2px;
  }
`;

export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .subtitle {
    font-size: 2rem;
  }

  .description {
    max-height: 200px;
    overflow-y: auto;
    padding-left: 0.5rem;
    line-height: 1.5;

    /* ScrollBar style */
    ::-webkit-scrollbar {
      width: 10px;
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
