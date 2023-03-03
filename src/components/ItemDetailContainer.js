import '../styles/idemdetailcontainer.css'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => { 
  const { id } = useParams();

  const [produ, setProd] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
     
        resolve([
            {
                id: 1,
                nombre: "My Hero Academia",
                categoria: "Manga",
                precio: 1800,
                stock: 10,
                url: "https://www.ivrea.com.ar/myheroacademia/myheroacademia01.jpg",
            },
            {
                id: 2,
                nombre: "Dragon Ball Super",
                categoria: "Manga",
                precio: 1800,
                stock: 10,
                url: "https://www.ivrea.com.ar/dragonballsuper/dragonballsuper01.jpg",
            },
            {
                id: 3,
                nombre: "Fullmetal Alchemist",
                categoria: "Manga",
                precio: 1800,
                stock: 10,
                url: "https://www.ivrea.com.ar/fullmetalalchemist/fullmetalalchemist01.jpg",
            },
            {
                id: 4,
                nombre: "Evangelion",
                categoria: "Manga",
                precio: 2000,
                stock: 10,
                url: "https://www.ivrea.com.ar/evangelion/evangeliondeluxe_01.jpg",
            },
            {
                id: 5,
                nombre: "Kaiju n°8",
                categoria: "Manga",
                precio: 1800,
                stock: 10,
                url: "https://www.ivrea.com.ar/kaiju/kaiju01.jpg",
            },
            {
                id: 6,
                nombre: "JoJo's Bizarre Adventures parte 1",
                categoria: "Manga",
                precio: 3000,
                stock: 10,
                url: "https://www.ivrea.com.ar/jojosbizarreadventure/jojo1-phantomblood1.jpg",
            },
            {
                id: 7,
                nombre: "JoJo's Bizarre Adventures parte 2",
                categoria: "Manga",
                precio: 3000,
                stock: 8,
                url: "https://www.ivrea.com.ar/jojosbizarreadventure/jojo2-battletendency1.jpg",
            },
            {
                id: 8,
                nombre: "JoJo's Bizarre Adventures parte 3",
                categoria: "Manga",
                precio: 3000,
                stock: 10,
                url: "https://www.ivrea.com.ar/jojosbizarreadventure/jojo3-stardustcrusaders01.jpg",
            },
            {
                id: 9,
                nombre: "JoJo's Bizarre Adventures parte 4",
                categoria: "Manga",
                precio: 3000,
                stock: 10,
                url: "https://www.ivrea.com.ar/jojosbizarreadventure/jojo4-diamondisunbreakable01.jpg",
            },
            {
                id: 10,
                nombre: "One Piece",
                categoria: "Manga",
                precio: 1800,
                stock: 2,
                url: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg",
            },
            {
                id: 11,
                nombre: "Komi-San",
                categoria: "Manga",
                precio: 3000,
                stock: 7,
                url: "https://www.ivrea.com.ar/komi-san/komi-san01.jpg",
            },
            {
                id: 12,
                nombre: "Beastars",
                categoria: "Manga",
                precio: 3000,
                stock: 10,
                url: "https://www.ivrea.com.ar/beastars/beastars01.jpg",
            },
            {
                id: 13,
                nombre: "Chainsaw Man",
                categoria: "Manga",
                precio: 1800,
                stock: 10,
                url: "https://www.ivrea.com.ar/chainsawman/chainsawman01.jpg",
            },
            {
                id: 14,
                nombre: "Sin City",
                categoria: "Comic",
                precio: 2500,
                stock: 3,
                url: "https://www.ivrea.com.ar/sincity/sincity1.jpg",
            },
            {
                id: 15,
                nombre: "The Maxx",
                categoria: "Comic",
                precio: 2500,
                stock: 10,
                url: "https://www.ivrea.com.ar/themaxx/themaxx1.jpg",
            },
            {
                id: 16,
                nombre: "He-Man Masters of the Universe",
                categoria: "Comic",
                precio: 4500,
                stock: 4,
                url: "https://www.ivrea.com.ar/heman/mastersoftheuniverse.jpg",
            },
            {
                id: 17,
                nombre: "Legion",
                categoria: "Comic",
                precio: 2000,
                stock: 10,
                url: "https://www.ivrea.com.ar/legion/legion.jpg",
            },
            {
                id: 18,
                nombre: "Las Tortugas Ninja",
                categoria: "Comic",
                precio: 2000,
                stock: 10,
                url: "https://www.ivrea.com.ar/tmnt/tmnt01.jpg",
            },
        ]);
     
    });
    promesa.then((res) => {
      setProd(res);
    });
  }, []);

  let a = produ.filter((p) => p.id === parseInt(id));

  console.log(a);
 
  return (
      <div>{a.map((b) => (
          <div key={b.id} className="card-detail-container" >
          <ItemDetail 
          nombre={b.nombre}
          src={b.url}
          stock={b.stock}
          precio={b.precio}
          id={b.id}/>
        </div>
          ))}
      </div>
    
  );
};
            
            

export default ItemDetailContainer;