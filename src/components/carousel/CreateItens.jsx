/* Style */
import { Link } from "react-router-dom";
import { Item, ItemImg } from "./CreateItemStyle";
import ImgNotFound from "../../assets/imgs/imgNotFound.png";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/original";

export default function CreateItens({ itens }) {
  return itens.map(
    (item) =>
      (item.poster_path || item.profile_path) && (
        <Item
          key={"key slide " + item.id}
          className="castItem" /* Use on DetailsCast */
        >
          <Link
            to={
              !item.profile_path
                ? `/detail/${item.id}`
                : `https://www.instagram.com/${item.name.replaceAll(" ", "")}`
            }
            className="link"
          >
            <ItemImg
              src={
                item.poster_path
                  ? BASE_URL_IMG + item.poster_path
                  : item.profile_path
                  ? BASE_URL_IMG + item.profile_path
                  : ImgNotFound
              }
              alt={item.title}
            />

            {
              item.profile_path && (
                <p className="castName">{item.name}</p>
              ) /* Use on DetailsCast */
            }
          </Link>
        </Item>
      )
  );
}