/* Style */
import { Colors } from "../../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const ContainerButtons = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1.5rem 3rem;
  background-color: rgb(${Colors.darkGray});
  color: rgb(${Colors.white});
  font-size: 1.6rem;
  transition: all 0.2s ease;

  :hover {
    background-color: rgb(${Colors.lightRed});
    color: rgb(${Colors.black});
    cursor: pointer;
  }

  &.btnTrailer {
    background-color: rgb(${Colors.lightRed});
  }
`;
