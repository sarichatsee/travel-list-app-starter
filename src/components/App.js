import React from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function Logo() {
  return <h1>My Travel List</h1>;
}

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  }
  

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
