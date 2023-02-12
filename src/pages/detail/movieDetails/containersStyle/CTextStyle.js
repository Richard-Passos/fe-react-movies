/* Style */
import { Colors } from "../../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerText = styled.div`
  width: 100%;
  max-width: 55rem;
  margin: 0 auto;
  padding: 2rem;
  padding-right: 0;
  font-size: 1.4rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1000px) {
    max-width: 70rem;
  }

  .title {
    font-size: 3rem;
    line-height: 1.2;
  }

  .genres {
    padding-left: 0.5rem;
    font-size: 1.2rem;
    line-height: 1.2;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  /* CText border */
  ::before,
  ::after {
    content: "";
    background-color: rgb(${Colors.darkRed});

    position: absolute;
    top: 0;
    left: 0;
  }
  ::before {
    width: 0.5rem;
    height: 15rem;
  }
  ::after {
    width: 15rem;
    height: 0.5rem;
  }
`;

export const Genre = styled.span`
  position: relative;

  :hover {
    color: rgb(${Colors.lightRed});
  }

  /* Genre bottom border */
  ::before {
    content: "";
    width: 100%;
    height: 0.1rem;
    background-color: rgb(${Colors.lightRed});

    position: absolute;
    bottom: -0.2rem;
  }
`;

export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .subtitle {
    font-size: 2rem;

    span {
      color: rgb(${Colors.lightRed});
    }
  }

  .description {
    max-height: 20rem;
    overflow-y: auto;
    padding: 0 0.5rem;
    line-height: 1.5;

    /* ScrollBar style */
    ::-webkit-scrollbar {
      width: 0.5rem;
      background-color: #000;
    }
    ::-webkit-scrollbar-track {
      background-color: rgb(${Colors.black});
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(${Colors.lightRed});
    }
  }
`;
