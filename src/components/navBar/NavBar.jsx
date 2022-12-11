import "./NavBar.css"
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () =>{
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link to="/"><img src="https://res.cloudinary.com/dctkfwskx/image/upload/v1669512232/desafioReact/logo_w5gkht.png" alt="logo" /></Link>
            </div>
            <ul className="navbar-list">
                <li><Link to="/">Todas</Link></li>
                <li><Link to="category/interior">Plantas de interior</Link></li>
                <li><Link to="category/exterior">Plantas de exterior</Link></li>
                <li><Link to="category/huerta">Huerta</Link></li>
            </ul>
            <CartWidget />
        </div>
    )
}