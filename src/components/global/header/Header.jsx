/* Style */
import { MainHeader, LogoContainer } from "./HeaderStyle";
import { Link } from "react-router-dom";
import Logo from "../../../assets/imgs/fultureLogo.png";

/* Logic */
import { useEffect, useState } from "react";

function Header() {

  const [bgBlack, setBgBlack] = useState(false)

  useEffect(() => {
    const scrollEvent = () => {
      if(window.scrollY > 30) {
        setBgBlack(true)
      } else {
        setBgBlack(false)
      }
    }

    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])
  return (
    <MainHeader className={bgBlack ? "bg-black" : ""}>
      <Link to={`/`}>
        <LogoContainer src={Logo} />
      </Link>
    </MainHeader>
  );
}

export default Header;
