/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerDetails = styled.div`
  width: 100%;
  max-width: 200rem;
  margin: 5rem auto 0;
  padding: 3.5rem;
  border-radius: 0.5rem;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem 5rem;

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
`;
