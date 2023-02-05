/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerImg = styled.picture`
  width: 100%;
  max-width: 39rem;

  img {
    width: 100%;
    border: 2px solid ${Colors.darkRed};
    border-radius: 0.5rem;
    transition: all 0.5s ease;

    :hover {
      box-shadow: 0px 5px 15px rgba(220, 20, 60, 0.35) /*colors.darkRed*/;
      scale: 1.1;
      cursor: pointer;
    }
  }
`;
