import "../styles/modal.css"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Modal = ({ children, isOpen, closeModal }) => {
    const { cart, clearCart, quantity, total } = useContext(CartContext);
    const modalContainerClick = (e) => e.stopPropagation();

    return (
        <>
            {cart.length === 0 ? (
                <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
                    <div className="modal-container">
                        <div className="div-btn2">
                            <button className="button-17" onClick={closeModal}>
                                Seguir comprando
                            </button>
                        </div>
                        <div className="children">{children}</div>
                    </div>
                </div>
            ) : (
                <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
                    <div className="modal-container" onClick={modalContainerClick}>
                        <div className="div-btn">
                            <button className="button-17" onClick={closeModal}>
                                Seguir comprando
                            </button>
                            <h4>
                                <strong>Items: {quantity} </strong>
                            </h4>
                            <h4>
                                <strong>Total: {total} </strong>
                            </h4>
                            <Link
                                className="button-18"
                                to="/checkout"
                                onClick={closeModal}
                            >
                                Finalizar Compra
                            </Link>
                        </div>
                        <div className="children">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Modal;