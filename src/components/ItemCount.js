import "../styles/itemdetail.css";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import { toast, Slide } from 'react-toastify';

const ItemCount = ({ item }) => {
  const { addCart } = useContext(CartContext);
  const [click, pulsar] = useState(1);

  const Sumar = () => {
    if (click < item.stock) {
      pulsar(click + 1);
    }
  };

  const Restar = () => {
    if (click > 1) {
      pulsar(click - 1);
    }
  };

  const addToCart = () => {
    addCart(item, click);
    toast.error('El producto se ha agregado correctamente', {
      position:"top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:Slide,
      icon:'◇',
      });

  };

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
      <button onClick={addToCart} className="btn btn-secondary me-md-2">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;