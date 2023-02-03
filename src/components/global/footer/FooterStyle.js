/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const MainFooter = styled.footer`
  width: 100%;
  max-width: 200rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkGray};
  
  p{
    text-align: center;
    font-size: 1.2rem;
    color: ${Colors.white};
    letter-spacing: .2rem;
    line-height: 1.5;
  }
`;