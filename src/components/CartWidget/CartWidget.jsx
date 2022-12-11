import "./CartWidget.css"
import {BsFillCartFill} from "react-icons/bs";
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="navbar-cart">
          <BsFillCartFill 
              style={{
                  fontSize: "2rem",
                  color: "#036303"
              }}
          />
          <span className="num">1</span>
      </div>
    </Link>
  )
}