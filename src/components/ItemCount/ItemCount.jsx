import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="count-container">
        <button className="count-button" onClick={handleClickDecrement}>
          -
        </button>
        <p className="count-text">{count}</p>
        <button className="count-button" onClick={handleClickIncrement}>
          +
        </button>
      </div>
      <button className="item-button" onClick={() => addProduct(count)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
