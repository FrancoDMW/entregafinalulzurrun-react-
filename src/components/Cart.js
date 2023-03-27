import "../styles/cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartDetail } from "./CartDetail";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return cart.length === 0 ? (
    <div className="empty">
      <h2>No hay Items en el Carrito</h2>
    </div>
  ) : (
    <div>
      <div className="col-lg-12">
        <div className="box-element-2">
          <div className="cart-row">
            <div className="tabla" style={{ flex: "1" }}>
              <strong></strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Nombre</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Precio</strong>
            </div>
            <div className="tabla" style={{ flex: "2" }}>
              <strong>Cantidad</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Total</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Borrar</strong>
            </div>
          </div>
          {cart
            .sort((x, y) => x.num - y.num)
            .map((prod) => (
              <div key={prod.id}>
                <CartDetail prod={prod} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;