/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";
import DefaultStyle from "../DefaultStyle";
import { Link as link } from "react-router-dom";

/* Logic */
import styled from "styled-components";

export const MainHeader = styled.header`
  ${DefaultStyle}

  position: initial;
  background-color: ${Colors.darkGray};

  &.mainPage {
    position: fixed;
    z-index: 5;
    transition: background-color 0.5s ease;
    background-color: transparent;
  }

  &.bgBlack {
    background-color: rgba(16, 17, 18, 0.9) /* Colors.darkGray */;
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
  color: ${Colors.darkRed} /* Alt color */;
  font-size: 2rem /* Alt font-size */;
`;