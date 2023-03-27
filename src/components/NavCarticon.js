import "../styles/navbar.css";
import { useModal } from "../Hooks/useModal";
import Modal from "../modals/Modal";
import Cart from "./Cart";
const NavCartIcon = ({ quantity }) => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
 
  return (
    <div className="form-inline my-2 my-lg-0">
      <div className="cartContainer">
        <a className="cart-shopping" onClick={openModal1}>
            <img className = "carrito2" width="50px"></img>
        </a>
        <Modal isOpen={isOpen1} closeModal={closeModal1}>
          <Cart />
        </Modal>
        <div className="cart-items">{ quantity === 0 ? <p></p> : quantity }</div>
      </div>
    </div>
  );
};

export default NavCartIcon; 