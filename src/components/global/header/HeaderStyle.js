/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  max-width: 200rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkGray};
`;

export const Logo = styled.span`
  color: ${Colors.darkRed};
  font-size: 3.5rem;
  letter-spacing: .5rem;
  transition: all .2s ease;

  :hover {
    cursor: pointer;
    color: ${Colors.lightRed};
    
  }
`;