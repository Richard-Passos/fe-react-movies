import styled from "styled-components";
import { Colors } from "../../assets/Colors";

export const MainContaier = styled.main`
  width: 100%;
  min-height: 100vh;
  color: ${Colors.lightGray};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .title {
    font-size: 3rem;
  }

  .text {
    font-size: 1.4rem;
  }

  button {

  }
`