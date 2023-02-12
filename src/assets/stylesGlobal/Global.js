/* Style */
import { Colors } from "./Colors";
import bgImg from "../imgs/backgroundImg.svg";

/* Logic */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;

    @media screen and (min-width: 2000px) {
      font-size: 20px;
    }
  }

  body {
    font-family: 'Libre Franklin', sans-serif;
    color: rgb(${Colors.white});
    background-color: rgb(${Colors.darkGray});
    overflow-x: hidden;

    background-image: url(${bgImg});

    background-repeat: no-repeat;

    display: flex;
    justify-content: center;

    /* ScrollBar style */
    ::-webkit-scrollbar {
      width: .5rem;
    }
    ::-webkit-scrollbar-track {
      background-color: rgb(${Colors.black});
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(${Colors.lightRed});
    }

    /* GLobal classes */
    .darkRed {
      color: rgb(${Colors.darkRed});
      transition: color 0.2s ease;

      :hover {
        color: rgb(${Colors.lightRed});
      }
    }
  }

  #root {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
