import styled from "styled-components";
import { Link as link } from "react-router-dom";
import { Colors } from "../../assets/Colors";

export const BtnTrailer = styled.button`
  width: 90%;
  max-width: 10rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${Colors.darkRed};
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

export const Link = styled(link)`
    width: 90%;
    max-width: 20rem;
    margin: 0 auto;
`

export const ButtonHome = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
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