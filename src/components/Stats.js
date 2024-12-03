import React from "react";
import Item from "./Item";

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!"
          : `You have ${numItems} items in the list. You already packed ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}

export default Stats;
