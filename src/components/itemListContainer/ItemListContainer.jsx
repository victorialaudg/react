import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {
  return (
    <div>
      <h2 className="bienvenida">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer;