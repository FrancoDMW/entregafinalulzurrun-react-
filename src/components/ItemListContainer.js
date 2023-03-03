import React from "react";
import "../styles/itemlistcontainer.css"
import CardsList from "./CardLists";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoria } = useParams();
  
    return (
      <>
        <div className="contenedor">
          <CardsList categoria={categoria} />
        </div>
      </> 
    );
  };
  export default ItemListContainer;