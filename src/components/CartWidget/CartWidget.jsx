import { BsCartCheck } from "react-icons/bs";
import "./cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();

  const content = (
    <div className="cartContainer">
      <BsCartCheck className="cartIcon" />
      <h2 className="totalItems">{total}</h2>
    </div>
  );

  return total > 0 ? (
    <Link to="/cart" className="cartLink">
      {content}
    </Link>
  ) : (
    content
  );
}

export default CartWidget;
