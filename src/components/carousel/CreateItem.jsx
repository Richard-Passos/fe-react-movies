/* Style */
import { Link } from "react-router-dom";
import { Item, ItemImg } from "./CreateItemStyle";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export default function CreateItem({ movies }) {
  return movies.map(({ id, poster_path, title }) => (
    
    <Item key={"key slide " + id}>
      <Link to={`/detail/${id}`} className="link">
        <ItemImg
          className="itemImg"
          src={BASE_URL_IMG + poster_path}
          alt={title}
        />
      </Link>
    </Item>
  ));
}