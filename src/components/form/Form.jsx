import { useState } from 'react'
import {addDoc, collection, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import {Grid, Button, TextField} from '@mui/material'
import Swal from 'sweetalert2'
import "./Form.css"

const Form = ( {cart, getTotalPrice, setOrderId, clearCart} ) => {
    const [userData, setUserData] = useState({name:"",apellido:"", phone:"", email:"", repiteemail:""})
    const total = getTotalPrice()

    const handleSubmit = (event) => {
        event.preventDefault()
        const order = {
            buyer: userData,
            items: cart,
            total: total,
            date: serverTimestamp()
        }
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection, order)
        .then(res=>setOrderId(res.id))

       cart.map((product) => (
            updateDoc(doc(db, "products", product.id), 
                {stock: product.stock - product.quantity}
            )
       ))

        clearCart()
    }

    const handleKey= (event)=>{        
        //if(event.key !== " " && event.key !== "e" && event.key !== "i" && event.key !== "o" && event.key !== "u"){
        if(event.key !== " "){
            //console.log(event.key)
        }else{
            event.preventDefault()
        } 
    }


    const validateForm = (e) => {
        function validarcampo(valor){
            if(valor == null || valor.length == 0 || /^\s+$/.test(valor)){
                return false;
            }
            else{return true;}
        }
        function verificaemail(email){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email)){return true;}
            else {return false;}
        }
        const formCompra=document.formCompra;
        const name=formCompra.name.value;
        const apellido=formCompra.apellido.value;
        const phone=formCompra.phone.value;
        const email=formCompra.email.value;
        const repiteemail=formCompra.repiteemail.value;
        e.preventDefault();
       
        if(!validarcampo(name) || !validarcampo(apellido) || !validarcampo(phone) || !validarcampo(email) || !validarcampo(repiteemail)){
            Swal.fire({
                title: "Completá todos los campos",
                text: 'Verificá que hayas completado todos tus datos para continuar',
                icon: "error",
                button: "Ok",
              })
        }    

     
        else if((email != repiteemail) || (!verificaemail(email)) || (!verificaemail(repiteemail))){
              Swal.fire({
                  title: "E-mail inválido",
                  text: 'Verificá haber completado ambos campos de e-mail, y en formato correcto. ¡No olvides el @ ni el punto!',
                  icon: "error",
                  button: "Ok",
                })
        }
        else{
            handleSubmit(e);
        }
    }

  return (
    <div>
        <form name="formCompra" action='' onSubmit={handleSubmit} className="form-container">
            <Grid 
                container 
                direction="row" 
                alignItems={"center"} 
                justifyContent="space-evenly"
                spacing={2}
                sx={{width:"100%"}}
                >
                <Grid item xs={12} md={7}>
                    <TextField 
                        type="text" 
                        label="Nombre" 
                        variant="filled" 
                        fullWidth 
                        placeholder="Ingresá tu nombre" 
                        name="name" 
                        value={userData.name}
                        onChange={(event) =>setUserData({...userData, name: event.target.value})}
                        onKeyDown={handleKey}
                        />
                </Grid>

                <Grid item xs={12} md={7}>
                    <TextField 
                        type="text" 
                        label="Apellido" 
                        variant="filled" 
                        fullWidth 
                        placeholder="Ingresá tu apellido" 
                        name="apellido" 
                        value={userData.apellido}
                        onChange={(event) =>setUserData({...userData, apellido: event.target.value})}
                        onKeyDown={handleKey}
                        />
                </Grid>

                <Grid item xs={12} md={7}>
                    <TextField 
                        type="text" 
                        label="Teléfono" 
                        variant="filled" 
                        fullWidth 
                        placeholder="Ingresá tu teléfono" 
                        name="phone" 
                        value={userData.phone} 
                        onChange={(event)=> setUserData({...userData, phone: event.target.value})}
                    />
                </Grid>

                <Grid item xs={12} md={7}>
                    <TextField 
                        type="email" 
                        label="E-mail" 
                        variant="filled" 
                        fullWidth 
                        placeholder="Ingresá tu e-mail" 
                        name="email" 
                        value={userData.email} 
                        onChange={(event)=> setUserData({...userData, email: event.target.value})}
                    />
                </Grid>

                <Grid item xs={12} md={7}>
                    <TextField 
                        type="email" 
                        label="Repetir e-mail" 
                        variant="filled" 
                        fullWidth 
                        placeholder="Repetí tu e-mail" 
                        name="repiteemail" 
                        value={userData.repiteemail} 
                        onChange={(event)=> setUserData({...userData, repiteemail: event.target.value})}
                    />
                </Grid>
                
                <Grid item xs={12} md={7}>
                    <Button type="submit" variant="contained" onClick={validateForm}>Finalizar Compra</Button>
                </Grid>
            </Grid>
            

        </form>
    </div>
  )
}

export default Form