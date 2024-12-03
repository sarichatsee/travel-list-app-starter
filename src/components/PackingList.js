import React from "react";

function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            packingItem={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ packingItem, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={packingItem.packed}
        onChange={() => onUpdateItem(packingItem.id)}
      />
      <span
        style={packingItem.packed ? { textDecoration: "line-through" } : {}}
      >
        {packingItem.description} ({packingItem.quantity})
      </span>
      <button onClick={() => onDeleteItem(packingItem.id)}>🗑️</button>
    </li>
  );
}

export default PackingList;
