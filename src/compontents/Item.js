import React from 'react'
import "./item.css"

const Item = (props) => {
  const {itemName, quantity, deleteShopItem, index, increaseQuantity, decreaseQuantity} = props;

  return (
    <div className='item-component-item'>
      <p>{itemName}</p>
      <button onClick={() => decreaseQuantity(index)}>{"<"}</button>
      <p>{quantity}</p>
      <button onClick={() => increaseQuantity(index)}>{">"}</button>
      <button onClick={() => deleteShopItem(index)}>削除</button>
    </div>
  )
}

export default Item