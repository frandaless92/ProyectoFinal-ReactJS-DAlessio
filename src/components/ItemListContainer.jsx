import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <>
      <section className="itemListCont">
        <h2 className="titleWelcome">{props.saludo}</h2>
        <p className="descriptionText">{props.descripcion}</p>
      </section>
    </>
  );
}

export default ItemListContainer;
