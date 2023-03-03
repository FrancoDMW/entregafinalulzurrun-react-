import "../styles/itemdetail.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock }) => {
  const [click, pulsar] = useState(0);

  const Sumar = () => {
    if (click < stock) {
      pulsar(click + 1);
    }
  };

  const Restar = () => {
    if (click > 0) {
      pulsar(click - 1);
    }
  };
  useEffect(() => {}, [click]);

  return (
    <div className="click-container">
      <div className="click-button">
        <p className="click-p1" onClick={Sumar}>
          ▲
        </p>
        <p className="click-p">{click}</p>
        <p className="click-p1" onClick={Restar}>
          ▼
        </p>
      </div>
      <button className="btn btn-secondary me-md-2">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;