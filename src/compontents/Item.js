import React from 'react'
import "./item.css"

const Item = (props) => {
  const {itemName, quantity, deleteShopItem, index} = props;

  // +ボタンで増加
  const increaseQuantity = () => {
    console.log("+が押されたよ")
  }

  //　-ボタンで減少
  const decreaseQuantity = () => {
    console.log("-が押されたよ")
  }


  return (
    <div className='item-component-item'>
      <p>{itemName}</p>
      <button onClick={() => decreaseQuantity()}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increaseQuantity()}>+</button>
      <button onClick={() => deleteShopItem(index)}>削除</button>
    </div>
  )
}

export default Item