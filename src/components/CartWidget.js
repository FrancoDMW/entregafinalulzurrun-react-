import React from "react";
import "../styles/navbar.css"
import cart from '../cart.png';
export default function CartWidget() {
    return (
            <div className = "carritoDiv">
                <img src={cart} className = "carrito" alt="carro"></img>
                <p className = "notificacion">3</p>
            </div>
    );
}