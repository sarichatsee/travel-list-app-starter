import React from "react";

function PackingList({ items, sortOrder, onDeleteItem, onUpdateItem }) {
  // Sort items based on sortOrder
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.description.localeCompare(b.description);
    } else {
      return b.description.localeCompare(a.description);
    }
  });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onUpdateItem(item.id)}
            />
            <span
              style={item.packed ? { textDecoration: "line-through" } : {}}
            >
              {item.description} ({item.quantity})
            </span>
            <button onClick={() => onDeleteItem(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
