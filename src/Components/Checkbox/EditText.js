import React, { useState } from "react";
import EditCheckBoxItem from "./EditCheckBoxItem";

export default function EditText({ lists }) {
  const initialItems = lists.map((item, index) => ({
    id: index + 1,
    name: item,
    checked: false,
  }));
  const [keysLists, setKeysLists] = useState(initialItems);

  const handleDelete = (id) => {
    setKeysLists(keysLists.filter((el, i) => el.id !== id));
  };

  const handleEdit = (id, newName) => {
    setKeysLists(
      keysLists.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div>
      <ul>
        {keysLists.map((item, index) => {
          return (
            <li key={item.id}>
              <EditCheckBoxItem
                item={item}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
