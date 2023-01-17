import { Button } from '@mui/material'
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import {CartContext} from '../../context/CartContext'
import './Cart.css'
import NoInfo from '../noInfo/NoInfo'
import Form from '../form/Form'
import {getDoc, doc, collection} from "firebase/firestore"
import { db } from '../../firebaseConfig'
import Orders from '../orders/Orders'

const Cart = () => {

  const {cart, clearCart, getTotalPrice, deleteProductById, getTotalItems} = useContext(CartContext)
  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState({})

  const openForm=()=>{
    if(cart.length >0 ){
      setBuy(true)
    }
    else{
      alert("El carrito está vacío. No puedes comprar.")
    }
  }

  useEffect( () =>{

    if(orderId){
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

        getDoc(ref)
        .then( res => {
          setOrder (
            {
              id: res.id,
              ...res.data()
            }
          )
        })
      }
    },[orderId])
  
    
    if (orderId) {
      return (
        <div className='order'>
          <h1>Tu número de orden de compra es: <span className='green'>{orderId}</span></h1>
          <Orders order={order} />
          
        </div>
      )
    }
    

  return (
    <div className='cart-container'>
        <div className='cart-card'>
          {
            cart.map(item=>(
              <div key={item.id}>
                <div className="col">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="col">
                  <h2>{item.name}</h2>
                  <h2 style={{color: "green"}}>${item.price}</h2>
                  <h2>{item.quantity} unidades</h2>
                  <br />
                  <Button variant="contained" onClick={()=>deleteProductById(item.id)}>Quitar producto</Button>
                </div>
              </div>
            ))
          }
          {cart.length < 1 && <NoInfo />}
        </div>

        { buy ? (
              <Form cart={cart} getTotalPrice={getTotalPrice} getTotalItems={getTotalItems} setOrderId={setOrderId} clearCart={clearCart} /> 
            ) :  (
              cart.length > 0 && 
              <div className="cart-info">
                <h2>Descripción del carrito: </h2>
                <hr />
                <h3>Cantidad total de productos: {getTotalItems()}

                </h3>
                <h3>Precio total: ${getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}</h3>
                <div className='area-btns'>
                  <div className="btn-cart">
                    <Button variant="contained" onClick={openForm}>Comprar</Button>
                    <Button onClick={()=>clearCart()} variant="contained">Borrar Carrito</Button>
                  </div>
                </div>
              </div>
            )
        }
    </div>
  )
}

export default Cart