/* Style */
import { Colors } from "../../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerExtra = styled.div`
  padding: 1.5rem 2rem;
  background-color: rgb(${Colors.darkGray});
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  :hover {
    background-color: rgba(${Colors.darkGray}, .5);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 0.5rem;
  }
`;
