import React from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

function Logo() {
  return <h1>My Travel List</h1>;
}

function App() {
  const [items, setItems] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState("asc"); // Track sorting order

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function toggleSortOrder() {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }

  return (
    <div className="app">
      <Logo />
      <Form
        addItem={handleAddItem}
        sortOrder={sortOrder}
        toggleSortOrder={toggleSortOrder}
      />
      <PackingList
        items={items}
        sortOrder={sortOrder}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
