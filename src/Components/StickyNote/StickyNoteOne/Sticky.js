import React, { useState } from "react";

const Sticky = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleSave = () => {
    onUpdate(note.id, text);
    setIsEditing(false);
  };

  return (
    <div className="sticky-note">
      {isEditing ? (
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <p>{note.text}</p>
      )}
      <button onClick={() => onDelete(note.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Sticky;
