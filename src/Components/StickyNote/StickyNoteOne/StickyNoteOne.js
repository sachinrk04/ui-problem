import React, { useState } from "react";
import "./StickyNoteOne.scss";
import Sticky from "./Sticky";

export default function StickyNoteOne() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: noteText,
    };
    setNotes([...notes, newNote]);
    setNoteText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };
  return (
    <div className="sticky-note-one">
      <div className="note-input">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <Sticky
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>
    </div>
  );
}
