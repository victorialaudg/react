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
  const [num, setNum] = useState(0)

  const [items, setItems] = useState([])

  const[posts, setPosts] = useState([])

  const[isCreated, setIsCreated] = useState(false)

  const[error,setError] = useState(null)



  const createPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        "userId": 2,
        "title": "test de react",
        "body": "descripcion"
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
    .then(() => setIsCreated(true))
  }


  const toggleMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
  }

  useEffect(()=>{
    console.log("hola desde el efecto con array de dependendia a la escucha de NUM")
  }, [num])


  useEffect(()=>{

    const productosFiltered= products.filter( productos => productos.category === categoryId)
    console.log("filtrados: ", productosFiltered)

    const task = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(categoryId ? productosFiltered : products);
      },2000)
      
    })
  
    task
      .then( (res) => { setItems(res) } )
      .catch( (err)=>{ console.log("se rechazó") } )
  
  console.log("se hizo la peticion")

  },[categoryId])

  console.log(items)

  const onAdd = (cantidad) =>{
    console.log("Agregaste: ", cantidad);
  }

useEffect(()=>{
  const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
  getPost.then( (res) => res.json() )
  .then((res) => setPosts(res))
  .catch((err) => setError(err))
},[])

console.log(posts)

  return (
    <div className={isDark ? "dark" : "light"}>
      <h2 className="bienvenida">{greeting}</h2>
      <button onClick={toggleMode}>{isDark ? "cambiar a Modo claro" : "cambiar a modo Oscuro"}</button>
      <button onClick={()=>setNum(num+1)}>Sumar</button>
      
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <ItemList items={items}/>
      <button onClick={createPost}>Crear Post</button>
    </div>
  )
}




export default ItemListContainer;