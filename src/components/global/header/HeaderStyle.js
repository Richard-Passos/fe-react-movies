/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const MainHeader = styled.header`
  width: 150% /* Fix position */;
  max-width: 200rem;
  position: fixed;
  z-index: 5;
  transition: background-color .5s ease;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const LogoContainer = styled.img`
  color: ${Colors.darkRed} /* Alt color */;
  font-size: 2rem /* Alt font-size */;
`;