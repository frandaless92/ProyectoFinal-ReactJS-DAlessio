import logoImg from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
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
            <Link to="/categoria/manos" className="items">
              Manos
            </Link>
          </li>
          <li>
            <Link to="/categoria/facial" className="items">
              Facial
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}

export default NavBar;
