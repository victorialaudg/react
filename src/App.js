//import Alert from '@mui/material/Alert';
//import AlertTitle from '@mui/material/AlertTitle';
//import ItemCount from './components/itemCount/ItemCount';
//import CustomButton from './components/customButton/CustomButton';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import {NavBar} from "./components/navBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      {/*
      <NavBar />
      <ItemListContainer greeting={"Próximamente: Vivero Orgánico"} />
      <div className="areaAlert">
      <Alert severity="success" color="warning" style={{fontSize: '1.1rem'}}>
        <AlertTitle style={{fontSize: '1.25rem'}}>Mientras tanto...</AlertTitle>
         Podés ir preparando todas tus macetas y un espacio con mucho sol!
      </Alert>
      <ItemDetailContainer />
      </div>
      */}

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h3>Hola! Este es el carrito</h3>} />
          <Route path="*" element={<h3>Ups... Esta URL no existe</h3>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
