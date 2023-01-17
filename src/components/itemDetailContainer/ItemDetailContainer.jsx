import { useState, useEffect } from "react"
//import { products } from "../../productsMock"
import CustomLoader from "../CustomLoader/CustomLoader"
import {useParams} from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import {getDoc, doc, collection} from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect( () =>{

    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)

    getDoc(ref)
    .then( res => {
      setProduct (
        {
          id: res.id,
          ...res.data()
        }
      )
    })
  },[id])
  
  if(product.id != id){
    return ( 
      <CustomLoader />
    )
  }else{
    return ( 
      <ItemDetail product={product} />
    )
  }
}

export default ItemDetailContainer