/* Style */
import { Colors } from "../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const Item = styled.div`
  width: 15rem;
  flex: none;
  margin: 0 1rem;

  .link {
    display: inline-block;
    height: 100%;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  pointer-events: none;
  color: ${Colors.white}; // alt color

  ${Item}:hover & {
    border-color: ${Colors.darkRed};
    box-shadow: 0px 5px 15px rgba(${Colors.darkRed}, 0.35);
    transform: scale(1.1);
  }
`;