import "./NavBar.css"

import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () =>{
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src="https://res.cloudinary.com/dctkfwskx/image/upload/v1669512232/desafioReact/logo_w5gkht.png" alt="logo" />
            </div>
            <ul className="navbar-list">
                <li>Plantas de interior</li>
                <li>Plantas de exterior</li>
                <li>Huerta</li>
            </ul>
            <CartWidget />
        </div>
    )
}