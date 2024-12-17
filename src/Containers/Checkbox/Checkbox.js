import React from "react";
import "./Checkbox.scss";
import HandleDelete from "../../Components/Checkbox/HandleDelete";
import HandleCheckboxDelete from "../../Components/Checkbox/HandleCheckboxDelete";
import EditText from "../../Components/Checkbox/EditText";

const lists = ["play cricket", "play video game", "read book"];

export default function Checkbox() {
  return (
    <div className="checkbox-container">
      <h2>1. Handle Delete item from lists</h2>
      <HandleDelete lists={lists} />
      <h2>
        2. Handle Checkbox and Delete item from lists. Delete button should be
        visible when checkbox is checked.
      </h2>
      <HandleCheckboxDelete lists={lists} />
      <h2>Edit Text</h2>
      <EditText lists={lists} />
    </div>
  );
}
