/* Style */
import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";
import bgImg from "../img/backgroundImg.svg"

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
  }

  .bg-img {
    background-image: url(${bgImg});
  }

  #root {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Switching the swipers buttons styles*/
  .swiper-slide {
    width: initial !important;
  }

  .swiper-button-prev, .swiper-button-next {
    color: ${Colors.white} !important;
    opacity: 1 !important;
    cursor: pointer !important;
    width: 60px !important;
    height: 60px !important;
    border-radius: 100% !important;
  }
  .swiper-button-prev:hover, .swiper-button-next:hover {
    background-color: rgba(16, 17, 18, .5) /*Colors.darkGray*/ !important;
  }

  .swiper-button-prev {
    left: -5px !important;
  }

  .swiper-button-next {
    right: -5px !important;
  }
`;

export default GlobalStyle;