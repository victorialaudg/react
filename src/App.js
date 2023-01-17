import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Form from './components/form/Form';
import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContext';
import {NavBar} from "./components/navBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>

      <BrowserRouter>
        <CartContextProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/category" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Form />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h3>Ups... Esta URL no existe</h3>} />

          </Routes>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
