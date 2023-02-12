/* Style */
import { Colors } from "../../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerImg = styled.picture`
  width: 100%;
  max-width: 35rem;

  img {
    width: 100%;
    border: 0.2rem solid rgb(${Colors.darkRed});
    border-radius: 0.5rem;
    transition: all 0.5s ease;

    :hover {
      scale: 1.1;
    }
  }
`;
