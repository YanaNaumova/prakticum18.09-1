import { useState } from "react";
import ItemList from "./ItemList";

function ParentComponentItem() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [count, setCount] = useState(0);

  function addItem() {
    setItems([...items, newItem]);
    setNewItem("");
  }

  function handleInput(e) {
    setNewItem(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e)} value={newItem} />
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>{count}</p>
      <ItemList items={items} />
    </div>
  );
}

export default ParentComponentItem;
