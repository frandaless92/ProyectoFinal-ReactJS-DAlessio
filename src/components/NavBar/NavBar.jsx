import logoImg from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="imgContainer">
        <Link to="/">
          <img className="imgLogo" src={logoImg} alt="Logo de la firma" />
        </Link>
      </div>
      <div className="listCategories">
        <ul className="itemsCategories">
          <li>
            <Link to="/categoria/corporal" className="items">
              Corporal
            </Link>
          </li>
          <li>
            <Link to="/categoria/unas" className="items">
              Uñas
            </Link>
          </li>
          <li>
            <Link to="/categoria/depilacion" className="items">
              Depilación
            </Link>
          </li>
          <li>
            <Link to="/categoria/facial" className="items">
              Facial
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget items={props.itemsCount} />
    </div>
  );
}

export default NavBar;
