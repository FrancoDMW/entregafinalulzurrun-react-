import "../styles/cards.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Card = ({ url, alt, title, price, id, num, car }) => {
    return (
      <div key={id} className="card">
        <a className="card-img">
        <Link className="Link" to={`/detail/${num}`}>
          <img src={url} alt={alt} />
        </Link>
        </a>
        <h4 className="card-title">{title}</h4>
        <div className="cardBody">
          <h6 className="precio">
            <strong>${price}</strong>
          </h6>
          <a>{car}</a>
        </div>
      </div>
    );
  };
  export default Card;