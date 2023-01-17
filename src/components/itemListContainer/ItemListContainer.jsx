import "./ItemListContainer.css"
import {useState, useEffect} from "react"
//import { products } from "../../productsMock"
import ItemList from "../itemList/ItemList"
import {useParams} from "react-router-dom"
import CustomLoader from "../CustomLoader/CustomLoader"
import { Button } from "@mui/material"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"


const ItemListContainer = ( {greeting} ) => {

  const {categoryId} = useParams()

  const [isDark, setIsDark] = useState(false)

  const [items, setItems] = useState([])


  const toggleMode = () => {
    setIsDark(!isDark)
  }


  useEffect(()=>{

    const itemCollection = collection( db, "products" )

    if(categoryId ){
      const q = query(itemCollection, where("category","==", categoryId))
      getDocs(q)
        .then( (res) =>{
          const products= res.docs.map(product => {
            return{
              id: product.id,
              ...product.data()
            }
          })
          setItems(products)
        })
        .catch( (err) => console.log(err))

    }else{
      getDocs(itemCollection)
        .then( (res) =>{
          const products= res.docs.map(product => {
            return{
              id: product.id,
              ...product.data()
            }
          })
          setItems(products)
        })
        .catch( (err) => console.log(err))
    }

  },[categoryId])


  return (
    <div className={isDark ? "dark" : "light"}>
      <h2 className="bienvenida">{greeting}</h2>
      <Button id="btn-changeMode" variant="contained" onClick={toggleMode}>{isDark ? "cambiar a Modo claro" : "cambiar a modo Oscuro"}</Button>
    

      { items.length > 0 ? <ItemList items={items}/> : <CustomLoader /> }
      
    </div>
  )
}


export default ItemListContainer;