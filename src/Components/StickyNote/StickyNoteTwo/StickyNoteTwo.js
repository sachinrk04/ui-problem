import React, { useState } from "react";
import "./StickyNoteTwo.scss";
import StickyTwo from "./StickyTwo";

export default function StickyNoteTwo() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), text: "" }]);
  };

  const removeNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  return (
    <div className="sticky-notes-two">
      <button className="sticky-notes-btn" onClick={addNote}>
        Create Note +
      </button>
      {notes.length > 0
        ? notes.map((note) => (
            <StickyTwo key={note.id} onClose={() => removeNote(note.id)} />
          ))
        : null}
    </div>
  );
}
