/* Styles */
import { Link } from "react-router-dom";
import { Header as HeaderStyled, Logo } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderStyled>
      <Link to={`/`}>
        <Logo>Fullflix</Logo>
      </Link>
    </HeaderStyled>
  );
}
