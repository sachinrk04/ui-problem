import React, { useState } from "react";

export default function CheckBoxItem({ item, onDelete }) {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span>{item.name}</span>
      {checked && <button onClick={() => onDelete(item.id)}>X</button>}
    </div>
  );
}
