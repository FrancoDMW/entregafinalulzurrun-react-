import "../styles/itemlistcontainer.css"
import CardList from "../components/CardLists";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const { categoria } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "Items");
  
      getDocs(itemsCollection).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setItems(docs);
      });
    }, []);
  
    return (
      <>
        <div className="contenedor">
          <CardList categoria={categoria} items={items} />
        </div>
      </> 
    );
  };
  export default ItemListContainer;