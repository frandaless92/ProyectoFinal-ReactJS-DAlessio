import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ service }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={service.imagen} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{service.nombre}</p>
        <p className="price-item">${service.precio}</p>
        <Link to={`/detail/${service.id}`} className="button-item">
          MÁS INFO...
        </Link>
      </div>
    </li>
  );
};

export default Item;
