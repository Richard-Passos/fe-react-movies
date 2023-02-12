/* Style */
import { Contaier } from "./ErrorPageStyle";
import { Link } from "react-router-dom";
import { Btn } from "../detail/movieDetails/containersStyle/CButtons";

export default function ErrorPage() {
  return (
    <Contaier>
        <Link to={"/"}>
          <Btn>Go Home</Btn>
        </Link>
    </Contaier>
  );
}