import { useState } from 'react';
import './App.css'
import Item from './compontents/Item';

function App() {
  // Inputに渡された値を収納するステート
  const [value, setValue] = useState("");
  // 買い物アイテムを格納するステート
  const [shopItmes, setShopItems] = useState([]);

  const addShopItem = () => {
 
  }

  return (
    <div className="App">
      <input type="text" placeholder="追加アイテム" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={addShopItem}>アイテム追加</button>
    </div>
  );
}

export default App;
