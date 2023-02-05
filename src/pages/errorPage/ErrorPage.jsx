/* Style */
import { MainContaier } from "./ErrorPageStyle";
import { Link } from "react-router-dom";
import { ButtonHome } from "../detail/buttonsStyle";

export default function ErrorPage() {
  return(
    <>
      <MainContaier>
        <h1 className="title">Erro: 404 (Not Found)</h1>
        <p className="text">Página não encontrada! Volte à página inicial.</p>

        <Link to={"/"}>
            <ButtonHome>Go Home</ButtonHome>
        </Link>
      </MainContaier>
    </>
  )
}