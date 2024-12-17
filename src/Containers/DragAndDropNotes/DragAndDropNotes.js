import React, { useState } from "react";
import "./DragAndDropNotes.scss";
import DAndDNotes from "../../Components/DragAndDropNotes/DAndDNotes";

const data = [
  {
    id: 1,
    text: "Note 1",
  },
  {
    id: 2,
    text: "Note 2",
  },
];

export default function DragAndDropNotes() {
  const [notes, setNotes] = useState(data);

  return (
    <div className="d-a-d-notes-container">
      <DAndDNotes notes={notes} setNotes={setNotes} />
    </div>
  );
}
