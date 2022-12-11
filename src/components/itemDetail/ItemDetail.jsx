import './itemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className="item_detail">
      <div className='col'>
        <img src={product.img} alt="" />
      </div>
      <div className='col'>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h3>{product.description}</h3>
      </div>
    </div>
  )
}

export default ItemDetail