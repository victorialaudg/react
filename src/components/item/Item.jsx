import {Link} from "react-router-dom"
import styles from "./Item.module.css"

const Item = ({element}) => {
  return (
    <div className={styles.card} key={element.name}>
        <h2 className={styles.name}>{element.name}</h2>
        <img src={element.img} alt="" />
        <h3 className={styles.price}>${element.price}</h3>
        <p className={styles.category}>Planta de {element.category}</p>
        <Link to={`/item/${element.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item