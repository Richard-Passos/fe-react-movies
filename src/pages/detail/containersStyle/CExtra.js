/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerExtra = styled.div`
  width: 100%;
  max-width: 15rem;
  padding: 1rem;
  border: 1px dashed ${Colors.darkRed};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 0.5rem;
  }
`;
