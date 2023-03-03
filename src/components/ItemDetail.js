import "../styles/itemdetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, src, stock, precio, id }) => {
    return (
        <div key={id} className="card-detail-general colorLetra">
            <div className = "card-detail">
                <div>
                    <img src={src} alt={nombre} />
                </div>
                <div>
                    <h5>{nombre}</h5>
                </div>
                <div>
                    <p>
                        Descripcion del producto
                    </p>
                </div>
            </div>
            <div className="precio">
                <div>
                    <h3 className = "h3espacio">
                        <strong>Precio: $ {precio}</strong>
                    </h3>
                </div>
                <div>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;