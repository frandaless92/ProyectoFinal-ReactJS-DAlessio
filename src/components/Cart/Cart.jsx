import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate, Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteAllProducts } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Resumen de Compra</h2>
      {cart.map((productCart) => (
        <div key={productCart.id} className="cart-item">
          <img
            src={productCart.imagen}
            alt={productCart.nombre}
            className="cart-item-image"
          />
          <div className="cart-item-info">
            <p className="cart-item-name">{productCart.nombre}</p>
            <p className="cart-item-price">Precio: ${productCart.precio}</p>
            <p className="cart-item-quantity">
              Cantidad: {productCart.quantity}
            </p>
            <p className="cart-item-subtotal">
              Subtotal: ${productCart.precio * productCart.quantity}
            </p>
          </div>
          <div className="cart-item-actions">
            <button
              className="cart-item-button"
              onClick={() => deleteProductById(productCart.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h3>
          <span style={{ textDecoration: "underline" }}>Total:</span> $
          {totalPrice()}
        </h3>
        <button className="button-deleteAll" onClick={deleteAllProducts}>
          Vaciar Carrito
        </button>
        <Link to="/checkout">
          <button className="button-finishBuy">Terminar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
