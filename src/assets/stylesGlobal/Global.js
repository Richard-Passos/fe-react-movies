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
    min-height: 100vh;
    font-family: 'Libre Franklin', sans-serif;
    background: radial-gradient(at 30% top, #30172a 0%, rgba(3, 37, 65, 1));
    overflow-x: hidden;
    color: ${Colors.darkGray};

    display: flex;
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

    /* GLobal classes */
    .bgImg {
      background-image: url(${bgImg});
    }

    .darkRed {
      color: ${Colors.darkRed};
      transition: color 0.2s ease;

      :hover {
        color: ${Colors.lightRed};
      }
    }
  }

  #root {
    width: 100%;
    max-width: 200rem;
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
