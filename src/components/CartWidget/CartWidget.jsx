import "./CartWidget.css"
import {BsFillCartFill} from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div className="navbar-cart">
        <BsFillCartFill 
            style={{
                fontSize: "2rem",
                color: "#036303"
            }}
        />
        <span className="num">1</span>
    </div>
  )
}