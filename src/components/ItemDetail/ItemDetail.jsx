import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ service = {} }) => {
  return (
    <div className="item-detail">
      <img className="item-image" src={service.imagen} alt={service.nombre} />

      <h2 className="item-name">{service.nombre}</h2>
      <p className="item-description">{service.descripcion}</p>
      <p className="item-price">${service.precio}</p>
      <Link>
        <button className="item-button">AGREGAR AL CARRITO</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
