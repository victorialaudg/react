import React from 'react'
import { Button } from '@mui/material'
import {Link} from "react-router-dom"
import "./NoInfo.css"


const noInfo = () => {
  return (
    <div className='noinfo'>
        <h2>Tu carrito está vacío</h2>
        <p>No hay información por aquí</p>
        <Link to={"/"}><Button variant="contained" style={{margin: "20px auto", display: "block"}}>Elegir productos</Button></Link>
    </div>
  )
}

export default noInfo