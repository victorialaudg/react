//import { products } from "../../productsMock"

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.img} alt="" />
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h3>{product.description}</h3>
    </div>
  )
}

export default ItemDetail