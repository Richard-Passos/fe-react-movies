/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";

/* Logic */
import styled, { keyframes } from "styled-components";

const isRotating = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1rem solid rgb(${Colors.black});
  border-top-color: rgb(${Colors.darkRed});
  border-radius: 50%;

  animation: ${isRotating} .5s infinite;
`;

