/* Style */
import { Colors } from "../../../assets/stylesGlobal/Colors";

/* Logic */
import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  max-width: 200rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkGray};
`;

export const Logo = styled.div`
  color: ${Colors.darkRed};
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    color: ${Colors.lightRed};
  }

  /* Letters style */
  span {
    display: inline-block;
  }

  & > span:nth-child(1) {
    -webkit-transform: translateX(-1px) translateY(30px) rotate(-12deg);
    transform: translateX(-1px) translateY(5px) rotate(-10deg);
  }
  & > span:nth-child(2) {
    -webkit-transform: translateX(-1px) translateY(15px) rotate(-8deg);
    transform: translateX(-1px) translateY(0px) rotate(-5deg);
  }
  & > span:nth-child(3) {
    -webkit-transform: translateX(-1px) translateY(8px) rotate(-2deg);
    transform: translateX(-1px) translateY(-2px) rotate(0deg);
  }
  & > span:nth-child(4) {
    -webkit-transform: translateX(-1px) translateY(8px) rotate(-2deg);
    transform: translateX(-1px) translateY(-2px) rotate(0);
  }
  & > span:nth-child(5) {
    -webkit-transform: translateX(-1px) translateY(8px) rotate(2deg);
    transform: translateX(-1px) translateY(-2px) rotate(0);
  }
  & > span:nth-child(6) {
    -webkit-transform: translateX(-1px) translateY(8px) rotate(2deg);
    transform: translateX(-1px) translateY(-2px) rotate(0deg);
  }
  & > span:nth-child(7) {
    -webkit-transform: translateX(-1px) translateY(26px) rotate(8deg);
    transform: translateX(-1px) translateY(0px) rotate(5deg);
  }
  & > span:nth-child(8) {
    -webkit-transform: translateX(-1px) translateY(30px) rotate(12deg);
    transform: translateX(-1px) translateY(5px) rotate(10deg);
  }
`;