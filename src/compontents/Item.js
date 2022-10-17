import React from 'react'
import "./item.css"

const Item = (props) => {
  const {itemName, quantity, deleteShopItem, index} = props;



  return (
    <div className='item-component-item'>
      <p>{itemName}</p>
      <p>{quantity}</p>
      <button onClick={() => deleteShopItem(index)}>削除</button>
    </div>
  )
}

export default Item