//import CustomButton from "../customButton/CustomButton";
import {useState} from "react"


const ItemCount = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  const [countermessage,setCountermessage] = useState("")

  const sumar = () =>{
    if(counter < stock ){
      setCounter(counter+1);
      setCountermessage("");
    }else{
      console.log("Superaste 10 items y se agotó el stock disponible");
      setCountermessage("Superaste 10 items y se agotó el stock disponible");
    }
  }

  const restar = () =>{
    if(counter > initial ){
      setCounter(counter-1);
      setCountermessage("");
    }
    else{
      setCountermessage("Ya no puedes seguir restando items");
    }
  }


  return (
    <div>
        <h2>{counter}</h2>
        <p>{countermessage}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={()=> onAdd(counter)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount