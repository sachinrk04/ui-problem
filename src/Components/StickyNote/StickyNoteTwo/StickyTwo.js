import React, { useRef, useState } from "react";

export default function StickyTwo({ onClose }) {
  const [allowMove, setAllowMove] = useState(false);
  const stickyNoteRef = useRef();
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  const handleMoudeDown = (e) => {
    setAllowMove(true);
    const domensions = stickyNoteRef.current.getBoundingClientRect();
    setDx(e.clientX - domensions.x);
    setDy(e.clientY - domensions.y);
  };
  const handleMoudeMove = (e) => {
    if (allowMove) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      stickyNoteRef.current.style.left = x + "px";
      stickyNoteRef.current.style.top = y + "px";
    }
  };
  const handleMoudeUp = () => {
    setAllowMove(false);
  };

  return (
    <div className="sticky-two" ref={stickyNoteRef}>
      <div
        className="sticky-two-header"
        onMouseDown={handleMoudeDown}
        onMouseMove={handleMoudeMove}
        onMouseUp={handleMoudeUp}
      >
        <div>Sticky Notes</div>
        <div className="sticky-two-close" onClick={onClose}>
          &times;
        </div>
      </div>
      <textarea
        className="sticky-two-textarea"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}
