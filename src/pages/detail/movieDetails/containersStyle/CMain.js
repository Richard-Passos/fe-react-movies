/* Logic */
import styled from "styled-components";
import { Colors } from "../../../../assets/stylesGlobal/Colors";

export const ContainerMain = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 5rem 2rem;
  background-color: rgba(${Colors.black}, 0.9);
  border-radius: 1rem 1rem 0 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 5rem 4rem;
  }
`;
