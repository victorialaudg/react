import "./ItemListContainer.css"
import {useState, useEffect} from "react"
import ItemCount from "../itemCount/ItemCount"
import { products } from "../../productsMock"
import ItemList from "../itemList/ItemList"
import {useParams} from "react-router-dom"

const ItemListContainer = ( {greeting} ) => {

  const {categoryId} = useParams()
  //console.log("category: " , categoryId)

  const [isDark, setIsDark] = useState(false)

  const [items, setItems] = useState([])



  const toggleMode = () => {
    setIsDark(!isDark)
    //console.log(isDark)
  }


  useEffect(()=>{

    const productosFiltered= products.filter( productos => productos.category === categoryId)
    //console.log("filtrados: ", productosFiltered)

    const task = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(categoryId ? productosFiltered : products);
      },2000)
      
    })
  
    task
      .then( (res) => { setItems(res) } )
      .catch( (err)=>{ console.log("se rechazó") } )
  
    console.log("se hizo la petición")

  },[categoryId])

  //console.log(items)

  const onAdd = (cantidad) =>{
    console.log("Agregaste: ", cantidad);
  }

  return (
    <div className={isDark ? "dark" : "light"}>
      <h2 className="bienvenida">{greeting}</h2>
      <button onClick={toggleMode}>{isDark ? "cambiar a Modo claro" : "cambiar a modo Oscuro"}</button>
      
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <ItemList items={items}/>
    </div>
  )
}


export default ItemListContainer;