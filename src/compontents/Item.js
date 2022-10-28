import React from 'react'
import "./item.css"

const Item = (props) => {
  const {itemName, quantity, deleteShopItem, index, increaseQuantity, decreaseQuantity} = props;

  return (
    <div className='item-component-item'>
      <button className='item-delete-button' onClick={() => deleteShopItem(index)}></button>
      <p className='item-name'>{itemName}</p>
      <div className='item-quantities'>
        <button onClick={() => decreaseQuantity(index)}>－</button>
        <p>{quantity}</p>
        <button onClick={() => increaseQuantity(index)}>＋</button>
      </div>
    </div>
  )
}

export default Item