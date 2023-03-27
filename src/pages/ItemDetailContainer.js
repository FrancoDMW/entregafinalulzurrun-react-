import '../styles/idemdetailcontainer.css'
import ItemDetail from '../components/ItemDetail'
import { useEffect, useState } from 'react'
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [Items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");

        const q = query(itemsCollection, where("num", "==", Number(id)));
        getDocs(q).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data(),
            }));
            setItems(docs);
        });
    }, [id]);

    return (
        <div>{Items.map((b) => (
            <div key={b.id} className="card-detail-container" >
                <ItemDetail
                    title={b.title}
                    url={b.url}
                    stock={b.stock}
                    price={b.price}
                    category={b.categoryId}
                    id={b.id}
                    num={b.num} />
            </div>
        ))}
        </div>

    );
};



export default ItemDetailContainer;