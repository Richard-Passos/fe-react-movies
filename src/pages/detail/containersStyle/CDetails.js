/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerDetails = styled.div`
  width: 100%;
  padding: 3.5rem 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  .darkRed {
    color: ${Colors.darkRed};
    transition: color 0.2s ease;

    :hover {
      color: ${Colors.lightRed};
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (min-width: 2000px) {
    margin: 3.5rem 0;
  }
`;
