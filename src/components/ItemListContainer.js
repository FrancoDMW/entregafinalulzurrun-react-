import React from "react";
import "../styles/itemlistcontainer.css"

export default function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
        </div>
    );
}
ItemListContainer.defaultProps = {
    titulo: 'Saludo predeterminado: Hola!'
}