import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.imagen} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{product.nombre}</p>
        <p className="price-item">${product.precio}</p>
        <Link to={`/detail/${product.id}`} className="button-item">
          MÁS INFO...
        </Link>
      </div>
    </li>
  );
};

export default Item;
