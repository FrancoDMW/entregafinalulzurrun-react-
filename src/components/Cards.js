import "../styles/cards.css";
import { Link } from "react-router-dom";

const Card = ({ src, alt, title, precio, id }) => {
    return (
      <div key={id} className="card">
        <a className="card-img">
        <Link className="Link" to={`/detail/${id}`}>
          <img src={src} alt={alt} />
        </Link>
        </a>
        <h4 className="card-title">{title}</h4>
        <div className="cardBody">
          <h6 className="precio">
            <strong>${precio}</strong>
          </h6>
          <button className="btn btn-secondary">
              Agregar al carrito
          </button>
        </div>
      </div>
    );
  };
  export default Card;