/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";
import pageNotFound from "../../assets/imgs/pageNotFound.svg";

export const Contaier = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;

  background-image: url(${pageNotFound});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  button {
    background-color: rgb(${Colors.white});
    color: rgb(${Colors.black});
  }
`;