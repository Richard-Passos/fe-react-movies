/* Style */
import { MainHeader, Logo } from "./HeaderStyle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <MainHeader>
      <Link to={`/`}>
        <Logo>
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span>L</span>
          <span>F</span>
          <span>L</span>
          <span>I</span>
          <span>X</span>
        </Logo>
      </Link>
    </MainHeader>
  );
}

export default Header;
