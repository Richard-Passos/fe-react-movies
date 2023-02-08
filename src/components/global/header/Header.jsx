/* Style */
import { MainHeader, Link, Logo } from "./HeaderStyle";
import LogoImg from "../../../assets/imgs/fultureLogo.png";

function Header({ detailPage, bgBlack }) {
  return (
    <MainHeader
      className={(detailPage ? "detailPage" : "" || bgBlack ? "bgBlack" : "")}
    >
      <Link to={`/`}>
        <Logo src={LogoImg} />
      </Link>
    </MainHeader>
  );
}

export default Header;
