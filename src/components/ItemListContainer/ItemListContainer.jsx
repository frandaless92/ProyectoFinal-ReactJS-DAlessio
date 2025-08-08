import { ItemList } from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts.js";

const ItemListContainer = (props) => {
  const { categoria } = useParams();
  const { products, loading } = useProducts(categoria);

  return (
    <>
      <section className="itemListCont">
        <h2 className="titleWelcome">{props.saludo}</h2>
        <p className="descriptionText">{props.descripcion}</p>
        {loading ? <Loading /> : <ItemList products={products} />}
      </section>
    </>
  );
};

export default ItemListContainer;
