import "../styles/itemdetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ title, url, stock, price, id, category, num }) => {
    let item = {
        id: id,
        title: title,
        url: url,
        price: price,
        stock: stock,
        category: category,
        num: num,
      };
    return (
        <div key={id} className="card-detail-general colorLetra">
            <div className = "card-detail">
                <div>
                    <img src={url} alt={title} />
                </div>
                <div>
                    <h5>{title}</h5>
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
                        <strong>Precio: $ {price}</strong>
                    </h3>
                </div>
                <div>
                    <ItemCount item={item} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;