import "../styles/cards.css";
import Card from "./Cards";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const CardsList = ({ categoria, items }) => {

    let itemsFiltrados = items.filter((p) => p.categoryId === categoria);

    if (categoria) {
        return itemsFiltrados.map((prod) => (
            <Card
                key={prod.id}
                alt={prod.title}
                title={prod.title}
                price={prod.price}
                url={prod.url}
                id={prod.id}
                num={prod.num}
                car={<ItemCount item={prod}/>}
            />
        ));
    } else {
        return items.map((prod) => (
            <div key={prod.id} className="card">
                <a className="card-img">
                    <Link className="Link" to={`/detail/${prod.id}`}>
                        <img src={prod.url} alt={prod.title} />
                    </Link>
                </a>
                <h4 className="card-title">{prod.title}</h4>
                <div className="cardBody">
                    <h6 className="precio">
                        <strong>${prod.price}</strong>
                    </h6>
                    <ItemCount item={prod} />
                </div>
            </div>
        ));
    }
};

export default CardsList;