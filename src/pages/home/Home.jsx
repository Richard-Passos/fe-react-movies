/* Style */
import Header from "../../components/global/header/Header";
import HomeCarousel from "./HomeCarousel";
import Footer from "../../components/global/footer/Footer";

/* Logic */
import { useEffect, useState } from "react";

export default function Home() {
  const [bgBlack, setBgBlack] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 30) {
        setBgBlack(true);
      } else {
        setBgBlack(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <>
      <Header mainPage={true} bgBlack={bgBlack} />
      <HomeCarousel />
      <Footer />
    </>
  );
}