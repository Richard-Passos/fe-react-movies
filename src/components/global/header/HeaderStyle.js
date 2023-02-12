/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";
import DefaultStyle from "../DefaultStyle";
import { Link as link } from "react-router-dom";

/* Logic */
import styled from "styled-components";

export const MainHeader = styled.header`
  ${DefaultStyle}
  
  transition: background-color 0.5s ease;

  &.mainPage {
    background-color: transparent;

    position: fixed;
    z-index: 5;
  }

  &.bgBlack {
    background-color: rgba(${Colors.black}, 0.9) /* Colors.black */;
  }
`;

export const Link = styled(link)`
  display: inline-block;
  width: 12rem;
  
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 135%;
  margin: -2.3rem;
  color: rgb(${Colors.darkRed}) /* Alt color */;
  font-size: 2rem /* Alt font-size */;
`;