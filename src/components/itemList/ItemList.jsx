import "./ItemList.css"
import Item from "../item/Item"

const ItemList = ({items}) => {
  return (
    <div className="container-cards">
    {
    items.map((element)=>{
        return (
         <Item key={element.name} element={element} />
        );
      })
      

    }
    </div>
  )
}

export default ItemList