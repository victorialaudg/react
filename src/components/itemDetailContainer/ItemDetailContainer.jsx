import { useState, useEffect } from "react"
import { products } from "../../productsMock"
import {useParams} from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"


const ItemDetailContainer = () => {

  
  const [product, setProduct] = useState({})

  const {id} = useParams()
  console.log(id)

  useEffect( () =>{
    const productSelected = products.find( producto => producto.id === +id)
      setProduct(productSelected)
  },[])
  
  console.log(product)

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer