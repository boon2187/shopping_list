import { useState } from 'react';
import './App.css'
import Item from './compontents/Item';

function App() {
  // Inputに渡された値を収納するステート
  // const [value, setValue] = useState("");
  // 買い物アイテムを格納するステート
  const [shopItems, setShopItems] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4"
  ]);

  // const addShopItem = () => {
 
  // }

  return (
    <div className="App">
      <div className="container" >
        <div className="shopping-list">
          <div className="input-area">
            <input type="text" placeholder="追加アイテム" ></input>
            <button>+</button>
          </div>
          <hr />
          <div className="shopping-items">
            <ul>
              {shopItems.map((item) => {
                return(
                <div key={item} className="item-row">
                  <li>{item}</li>
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
