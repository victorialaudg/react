import { Button } from "@mui/material"
import {useState, useEffect} from "react"


const ItemCount = ({stock, initial = 0, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  const [countermessage,setCountermessage] = useState("")

  useEffect( () =>{
    setCounter(initial)
  }, [initial])

  const sumar = () =>{
    if(counter < stock ){
      setCounter(counter+1);
      setCountermessage("");
    }
    else{
      setCountermessage("Superaste 10 items y se agotó el stock disponible");
    }
  }

  const restar = () =>{
    if(counter > 1 ){
      setCounter(counter-1);
      setCountermessage("");
    }
    else{
      setCountermessage("Ya no puedes seguir restando items");
    }
  }


  return (
    <div className="itemCount">
        <h2>Agregaste: {counter}</h2>
        <p>{countermessage}</p>
        <div className="areabtns">
          <Button variant="contained" onClick={restar} 
              style={{
                    backgroundColor: "#fff",
                    color: "#036303"
              }}>
            -
          </Button>
          <Button variant="contained" onClick={() => onAdd(counter)}>
            Agregar al carrito
          </Button>
          <Button variant="contained" onClick={sumar} style={{
                    backgroundColor: "#fff",
                    color: "#036303"
              }}>
            +
          </Button>
        </div>
    </div>
  )
}

export default ItemCount