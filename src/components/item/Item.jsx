import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({element}) => {
  return (
    <div className="card" key={element.name}>
        <h2 className="name">{element.name}</h2>
        <img src={element.img} alt="" />
        <h3 className="price">${element.price}</h3>
        <p className="category">Planta de {element.category}</p>
        <Link to={`/item/${element.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item