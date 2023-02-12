/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const Item = styled.div`
  width: 20rem;
  flex: none;

  .link {
    width: 100%;
    height: 100%;

    display: inline-block;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  box-shadow: 0px 5px 15px rgba(${Colors.darkGray}, .35);
  border: 0.2rem solid rgb(${Colors.darkGray});
  border-radius: 0.5rem;
  transition: all .2s ease;
  pointer-events: none;
  color: rgb(${Colors.white}); // alt color

  ${Item}:hover & {
    border-color: rgb(${Colors.darkRed});
    box-shadow: 0px 5px 10px rgba(${Colors.darkRed}, 0.35);
    transform: scale(1.1);
  }
`;