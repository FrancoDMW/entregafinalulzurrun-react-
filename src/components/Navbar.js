import "../styles/navbar.css"
import NavCartIcon from "./NavCarticon";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import { CartContext } from "../context/CartContext"; 

export default function Navbar() {
    const { quantity } = useContext(CartContext);
    const categoria = {
        manga: "Manga",
        comic: "Comic",
    }
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <NavLink to={'/'} className="logoHeader"></NavLink>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <ul>
                    <li>
                        <NavLink to={'/'} className="headerBtn fondo">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/${categoria.manga}`} className="headerBtn fondo">Mangas</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/${categoria.comic}`} className="headerBtn fondo">Comics</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <NavCartIcon quantity={quantity} />
            </div>
        </nav>
    );
}