import React from "react";
import "./StickyNote.scss";
import StickyNoteOne from "../../Components/StickyNote/StickyNoteOne/StickyNoteOne";
import StickyNoteTwo from "../../Components/StickyNote/StickyNoteTwo/StickyNoteTwo";

export default function StickyNote() {
  return (
    <div className="sticky-note-container">
      <h1>Sticky Notes One</h1>
      <StickyNoteOne />
      <h1>Sticky Notes Two</h1>
      <StickyNoteTwo />
    </div>
  );
}
