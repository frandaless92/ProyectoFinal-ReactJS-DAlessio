import "./app.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const textWelcome = "BIENVENIDO/A A NUESTRO PORTAL";
  const descriptext =
    "Este simulador representa un ecommerce básico para productos de estética llamado Yanel Lagares.";
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  saludo={textWelcome}
                  descripcion={descriptext}
                />
              }
            />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
