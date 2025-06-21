import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const textWelcome = "BIENVENIDO/A A NUESTRO PORTAL DE TURNOS";
  const descriptext =
    "Este simulador representa un sistema básico de turnos para un centro de estética llamado Yanel Lagares & Abru Nails, que ofrece servicios como masajes, depilación y uñas. En él podrá reservar el servicio, conocer nuestros importes y obtener un resumen de su reserva.";
  return (
    <>
      <NavBar itemsCount={6} />
      <ItemListContainer saludo={textWelcome} descripcion={descriptext} />
    </>
  );
}

export default App;
