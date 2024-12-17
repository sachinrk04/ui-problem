import React, { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";

export default function HandleCheckboxDelete({ lists }) {
  const initialItems = lists.map((item, index) => ({
    id: index + 1,
    name: item,
    checked: false,
  }));
  const [keysLists, setKeysLists] = useState(initialItems);

  const handleDelete = (id) => {
    const filteredList = keysLists.filter((el, i) => el.id !== id);
    setKeysLists(filteredList);
  };

  const handleCheckboxChange = (checked, id) => {
    const updatedList = keysLists.map((el) => {
      return {
        ...el,
        checked: el.id === id ? checked : el.checked,
      };
    });
    setKeysLists(updatedList);
  };

  return (
    <div>
      <h3>Method 1</h3>
      <ul>
        {keysLists.map((item, index) => {
          return (
            <li key={item.id}>
              <CheckBoxItem item={item} onDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
      <h3>Method 2</h3>
      <ul>
        {keysLists.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, item.id)
                }
              />
              <span>{item.name}</span>
              {item.checked && (
                <button onClick={() => handleDelete(item.id)}>X</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
