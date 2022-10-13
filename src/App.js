import { useEffect, useState } from 'react';
import './App.css'
import Item from './compontents/Item';

function App() {
  // Inputに渡された値を収納するステート
  const [inputText, setInputText] = useState("");
  // 買い物アイテムを格納するステート
  const [shopItems, setShopItems] = useState([
    {itemName:"item 1", quantity: 2},
    {itemName:"item 2", quantity: 1},
    {itemName:"item 3", quantity: 4},
    {itemName:"item 4", quantity: 3},
  ]);
  // アイテムのトータル数を収納するステート
  const [itemTotal, setItemTotal] = useState(0);

  // アイテム数のトータルの計算をuseStateで実装
  useEffect(() => {
    const totalQuantity = () => {
      shopItems.map()
    };
    totalQuantity();
  }, []);

  // inputに入力されたらそれをitemTextステートにわたす→冗長なのでなくした。
  // const onChangeInputText = (e) => setInputText(e.target.value);
  
  // アイテム追加の処理
  const addShopItem = () => {
    if (inputText === "") return;
    const newShopItem = {itemName: inputText, quantity:1}
    const newShopItems = [...shopItems, newShopItem];
    setShopItems(newShopItems);
    setInputText("");
  }

  // アイテム削除の処理
  // const deleteShopItem = () = {}

  return (
    <div className="App">
      <div className="container" >
        <div className="shopping-list">
          <div className="input-area">
            <input 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text" 
              placeholder="追加アイテム" 
              ></input>
            <button onClick={addShopItem}>+</button>
          </div>
          <hr />
          <div className="shopping-items">
            <ul>
              {shopItems.map((item, i) => {
                return(
                <div key={i} className="item-row">
                  <li><Item itemName={item.itemName} quantity={item.quantity} /></li>
                </div>
                )
              })}
            </ul>
            <p>total:3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
