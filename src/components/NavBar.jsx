import logoImg from "../assets/logo.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="imgContainer">
        <img className="imgLogo" src={logoImg} alt="Logo de la firma" />
      </div>
      <div className="listMenu">
        <ul className="itemsMenu">
          <li className="item">Servicios</li>
          <li className="item">Turnos</li>
        </ul>
      </div>
      <CartWidget items={props.itemsCount} />
    </div>
  );
}

export default NavBar;
