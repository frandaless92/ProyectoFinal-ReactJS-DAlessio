import { BsCartCheck } from "react-icons/bs";
import "./CartWidget.css";
function CartWidget(props) {
  return (
    <div className="cartContainer">
      <BsCartCheck className="cartIcon" fill={"grey"} size={32} />
      <h2 className="totalItems">{props.items}</h2>
    </div>
  );
}

export default CartWidget;
