import { useState } from 'react';
import './App.css'
import Item from './compontents/Item';

function App() {
  // 買い物アイテムを格納するステート
  const [items, setItems] = useState([]);

  const addShopItem = () => {
    
  }

  return (
    <div className="App">
      <input type="text" placeholder="追加アイテム" ></input>
      <button onClick={addShopItem}>アイテム追加</button>
      <Item />
    </div>
  );
}

export default App;
