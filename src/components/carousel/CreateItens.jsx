/* Style */
import { Link } from "react-router-dom";
import { Item, ItemImg } from "./CreateItemStyle";
import ImgNotFound from "../../assets/imgs/imgNotFound.png";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export default function CreateItens({ movies }) {
  return movies.map(({ id, poster_path, title }) => (
    <Item key={"key slide " + id}>
      <Link to={`/detail/${id}`} className="link">
        <ItemImg
          src={poster_path ? BASE_URL_IMG + poster_path : ImgNotFound}
          alt={title}
        />
      </Link>
    </Item>
  ));
}