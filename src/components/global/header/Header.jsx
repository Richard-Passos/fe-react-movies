/* Style */
import { MainHeader, Logo } from "./HeaderStyle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <MainHeader>
      <Link to={`/`}>
        <Logo>Fullflix</Logo>
      </Link>
    </MainHeader>
  );
}

export default Header;
