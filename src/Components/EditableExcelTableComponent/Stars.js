import React from "react";
import { addClassWhenNeeded } from "./utils";

export default function Stars(props) {
  addClassWhenNeeded(props);

  return <div className="starIcon htCenter">{"★".repeat(props.value)}</div>;
}
