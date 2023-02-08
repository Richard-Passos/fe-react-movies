/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";
import DefaultStyle from "../DefaultStyle";

/* Logic */
import styled from "styled-components";

export const MainFooter = styled.footer`
  ${DefaultStyle}
  
  background-color: ${Colors.darkGray};

  p {
    text-align: center;
    font-size: 1.2rem;
    color: ${Colors.white};
    letter-spacing: 0.2rem;
    line-height: 1.5;
  }
`;