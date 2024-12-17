import React, { forwardRef } from "react";

const DAndDNote = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: `${initialPos?.x}px`,
        left: `${initialPos?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
        background: "lightyellow",
      }}
      {...props}
    >
      📌 {content}
    </div>
  );
});

export default DAndDNote;
