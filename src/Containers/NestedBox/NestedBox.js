import React, { useState } from "react";
import "./NestedBox.scss";

const NestedBox = () => {
  const [box, setBox] = useState([]);

  const handleBox = () => {
    const newBox = <NestedBox key={box.length} />;
    setBox([...box, newBox]);
  };

  return (
    <>
      <div className={`box_div`} onClick={handleBox}></div>
      <div className="child_box">{box}</div>
    </>
  );
};

export default NestedBox;
