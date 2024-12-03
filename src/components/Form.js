import React from "react";

function Form({ addItem, sortOrder, toggleSortOrder }) {
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    addItem(newItem);

    // Reset input fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <h3>What do you need to pack?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
        <button
          type="button"
          className="sort-button"
          onClick={toggleSortOrder}
          aria-label={`Sort ${sortOrder === "asc" ? "Z-A" : "A-Z"}`}
        >
          {sortOrder === "asc" ? (
            <i className="fa-solid fa-arrow-down-z-a"></i>
          ) : (
            <i className="fa-solid fa-arrow-up-z-a"></i>
          )}
        </button>
      </div>
    </form>

  );
}

export default Form;
