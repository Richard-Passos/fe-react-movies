/* Style */
import { MainHeader, Link, Logo } from "./HeaderStyle";
import LogoImg from "../../../assets/imgs/fultureLogo.png";

function Header({ mainPage, bgBlack }) {
  return (
    <MainHeader
      className={
        `${mainPage ? "mainPage" : ""} ${bgBlack ? "bgBlack" : ""}`
      }
    >
      <Link to={`/`}>
        <Logo src={LogoImg} />
      </Link>
    </MainHeader>
  );
}

export default Header;
