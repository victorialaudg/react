import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import './Orders.css'

const Orders = ({order}) => {
  return (
    <div className='order-detail'>
        <h2>¡Gracias <span className='green'>{order?.buyer?.name}</span> por tu compra!</h2>
        <Link to={"/"}><Button variant="contained">Volver a comprar</Button></Link>
    </div>
  )
}

export default Orders