/* Logic */
import styled from "styled-components";

export const ContainerDetails = styled.div`
  width: 100%;
  padding: 3rem 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (min-width: 2000px) {
    margin: 3.5rem 0;
  }
`;
