/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  border-top: 0.1rem solid rgb(${Colors.lightRed});

  display: flex;
  flex-direction: column;
  gap: 5rem;

  & section {
    background-color: rgba(${Colors.black}, .9);
    border-radius: 0 0 1rem 1rem;

    .castItem {
      width: 10rem;

      img {
        border-radius: 50rem;
      }
    }

    .castName {
      text-align: center;
      margin-top: 1rem;
    }

    .next,
    .prev {
      width: 2rem;
      height: 65%;
    }
  }
`;