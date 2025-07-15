import useServices from "../../hooks/useServices.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { categoria } = useParams();
  const { services, loading } = useServices(categoria);

  return (
    <>
      <section className="itemListCont">
        <h2 className="titleWelcome">{props.saludo}</h2>
        <p className="descriptionText">{props.descripcion}</p>
        {loading ? <Loading /> : <ItemList services={services} />}
      </section>
    </>
  );
};

export default ItemListContainer;
