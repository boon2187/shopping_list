import { useState } from 'react';
import './App.css'
import Item from './compontents/Item';

function App() {
  // Inputに渡された値を収納するステート
  const [itemText, setItemText] = useState("");
  // 買い物アイテムを格納するステート
  const [shopItems, setShopItems] = useState([
    {itemName:"item 1", quantity: 2},
    {itemName:"item 2", quantity: 1},
    {itemName:"item 3", quantity: 4},
    {itemName:"item 4", quantity: 3},
  ]);

  // inputに入力されたらそれをitemTextステートにわたす
  const onChangeItemText = async (e) => {
    // console.log(e.target.value);
    await setItemText(e.target.value);
    console.log(itemText);
  }

  // アイテム追加の処理
  // const addShopItem = () => {
 
  // }

  // アイテム削除の処理
  // const deleteShopItem = () = {}

  // アイテムの合計の計算
  // const quantity_total = () => {}

  return (
    <div className="App">
      <div className="container" >
        <div className="shopping-list">
          <div className="input-area">
            <input 
              type="text" 
              placeholder="追加アイテム" 
              value={itemText}
              onChange={onChangeItemText}></input>
            <button>+</button>
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
