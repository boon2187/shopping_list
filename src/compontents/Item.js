import React from 'react'

const Item = ({quantity, itemName}) => {
  // const {itemName, quantity} = props;

  return (
    <div>{itemName}  {quantity}</div>
  )
}

export default Item