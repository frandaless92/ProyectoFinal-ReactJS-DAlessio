import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const textWelcome = "BIENVENIDO/A A NUESTRO PORTAL";
  const descriptext =
    "Este simulador representa un ecommerce básico para un centro de estética llamado Yanel Lagares & Abru Nails, que ofrece servicios como masajes, depilación y uñas. En él podrá seleccionar el servicio, conocer nuestros importes y concretar la compra.";
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar itemsCount={0} />

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
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detail/:serviceId" element={<ItemDetailContainer />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
