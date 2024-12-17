import React, { useState } from "react";

export default function EditCheckBoxItem({ item, onDelete, onEdit }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(item.name);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSave = () => {
    onEdit(item.id, newValue);
    setIsEditing(false);
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setNewValue(item.name);
      setIsEditing(false);
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <input type="text" value={newValue} onChange={handleInputChange} />
      ) : (
        <span>{item.name}</span>
      )}

      {checked && (
        <>
          <button onClick={() => onDelete(item.id)}>Delete</button>
          <button onClick={() => handleEdit()}>
            {isEditing ? "cancel" : "Edit"}
          </button>
          {isEditing && <button onClick={handleSave}>Save</button>}
        </>
      )}
    </div>
  );
}
