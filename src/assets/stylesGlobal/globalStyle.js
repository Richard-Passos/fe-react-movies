/* Style */
import { Colors } from "./Colors";
import bgImg from "../img/backgroundImg.svg"

/* Logic */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    font-family: 'Fira Sans', sans-serif;
    background: radial-gradient(at 30% top, #30172a 0%, rgba(3, 37, 65, 1));
    overflow-x: hidden;
    color: ${Colors.darkGray};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* ScrollBar style */
    ::-webkit-scrollbar {
      width: 5px;
      background-color: #000;
    }
    ::-webkit-scrollbar-track {
      background-color: ${Colors.darkGray};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${Colors.lightRed};
    }
  }

  .bg-img {
    background-image: url(${bgImg});
  }

  .bg-black {
    background-color: rgba(16,17,18, 0.5);
  }

  /* Switching the swipers buttons styles*/
`;

export default GlobalStyle;