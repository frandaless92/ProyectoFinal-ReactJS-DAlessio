import Item from "../Item/Item";
import "./itemlist.css";
import hocFilterProducts from "../../hoc/hocFilterProducts";

const ItemList = ({ products = [] }) => {
  return (
    <ul className="item-list">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ul>
  );
};

const ItemListWithSearch = hocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };
