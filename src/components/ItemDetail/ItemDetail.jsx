import "./itemdetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(CartContext);
  const addProduct = (quantity) => {
    const productCart = { ...product, quantity };
    addProductInCart(productCart);
    // 👇 Alerta SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.nombre} fue agregado al carrito`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="item-detail">
      <img className="item-image" src={product.imagen} alt={product.nombre} />
      <h2 className="item-name">{product.nombre}</h2>
      <p className="item-description">{product.descripcion}</p>
      <p className="item-price">${product.precio}</p>
      {product.stock > 0 ? (
        <ItemCount stock={product.stock} addProduct={addProduct} />
      ) : (
        <div className="item-description">Sin stock</div>
      )}
    </div>
  );
};

export default ItemDetail;
