import styled from "styled-components";
import { Colors } from "../../../assets/Colors";

export const Footer = styled.footer`
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkGray};
  
  p{
    text-align: center;
    font-size: 1.2rem;
    color: ${Colors.white};
    letter-spacing: .2rem;
  }
`;