import useService from "../../hooks/useService.js";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { serviceId } = useParams();
  const { service, loading } = useService(serviceId);

  return <div>{loading ? <Loading /> : <ItemDetail service={service} />}</div>;
};

export default ItemDetailContainer;
