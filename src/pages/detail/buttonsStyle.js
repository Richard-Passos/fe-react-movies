/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const BtnTrailer = styled.button`
  width: 90%;
  max-width: 10rem;
  padding: 1rem 1.5rem;
  border: .1rem solid ${Colors.darkRed};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${Colors.lightGray};
  font-size: 1.6rem;
  transition: all 0.2s ease;

  :hover {
    background-color: ${Colors.darkRed};
    color: ${Colors.darkGray};
    cursor: pointer;
  }
`;

export const ButtonHome = styled.button`
  padding: 1rem 3.5rem;
  border: 1px solid ${Colors.darkRed};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${Colors.lightGray};
  font-size: 2rem;
  transition: all 0.2s ease;

  :hover {
    background-color: ${Colors.darkRed};
    color: ${Colors.darkGray};
    cursor: pointer;
  }
`;