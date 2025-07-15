import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ services = [] }) => {
  return (
    <ul className="item-list">
      {services.map((service) => (
        <Item service={service} key={service.id} />
      ))}
    </ul>
  );
};

export default ItemList;
