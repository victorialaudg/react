import { useContext } from "react";
import "./CartWidget.css"
import {BsFillCartFill} from "react-icons/bs";
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {

    const{cart, getTotalItems} = useContext(CartContext)


  return (
    <Link to="/cart">
      <div className="navbar-cart">
          <BsFillCartFill 
              style={{
                  fontSize: "2rem",
                  color: "#036303"
              }}
          />
          <div className="num">
            <span>
              {cart.length}
            </span>
          </div>
      </div>
    </Link>
  )
}