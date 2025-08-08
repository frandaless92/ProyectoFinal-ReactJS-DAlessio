import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, doc, collection, runTransaction } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteAllProducts } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      createdAd: new Date().toLocaleString("es-AR", { hour12: false }),
    };

    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      await stockControl();
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id);
      deleteAllProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const stockControl = async () => {
    try {
      await runTransaction(db, async (tx) => {
        for (const item of cart) {
          const productRef = doc(db, "products", item.id);
          const productSnap = await tx.get(productRef);

          if (!productSnap.exists()) {
            throw new Error(`El producto ${item.id} no existe.`);
          }

          const data = productSnap.data();
          const currentStock = Number(data.stock ?? 0);
          const needed = Number(item.quantity ?? 0);

          if (currentStock < needed) {
            throw new Error(
              `Stock insuficiente para ${
                data.name ?? item.id
              }. Disponible: ${currentStock}, solicitado: ${needed}.`
            );
          }

          // Descuento de stock
          tx.update(productRef, { stock: currentStock - needed });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {orderId ? (
        <div className="order-success">
          <h2 className="order-success-title">
            ¡Orden generada correctamente!
          </h2>
          <p className="order-success-text">
            Guarde el Identificador de su Orden:{" "}
            <span className="order-id">{orderId}</span>
          </p>
          <Link to="/" className="order-success-link">
            <button className="order-success-button">Volver a Comprar</button>
          </Link>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          sendOrder={sendOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
