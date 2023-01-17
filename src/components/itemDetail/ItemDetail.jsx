import { useContext } from 'react'
import ItemCount from '../itemCount/ItemCount'
import Swal from 'sweetalert2'
import './itemDetail.css'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {

  const{addToCart, getQuantityById} = useContext(CartContext)

  const onAdd = (quantity) =>{
    if(quantity > 0){
    
      addToCart(
        {
          ...product,
          quantity: quantity
        }
      )

      Swal.fire({
        title: "¡Producto agregado!",
        text: `Agregaste ${product.name} al carrito`,
        icon: "success",
        button: "Ok",
      })

    }
    else{
      Swal.fire({
        title: "Agrega algún item",
        text: 'Presioná el botón "+" y luego "Agregar al carrito"',
        icon: "warning",
        button: "Ok",
      })
    }
  }

  const quantity= getQuantityById(product.id)

  
  return (
    <div>
      <div className="item_detail">
        <div className='col'>
          <img src={product.img} alt="" />
        </div>
        <div className='col'>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <h3>{product.description}</h3>
          <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
        </div>
      </div>
    </div>
  )
}


export default ItemDetail