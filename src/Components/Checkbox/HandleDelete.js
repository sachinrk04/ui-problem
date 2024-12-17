import React, { useState } from "react";

export default function HandleDelete({ lists }) {
  const [copyLists, setCopyLists] = useState(lists);

  const handleDelete = (listsIndex) => {
    const newLists = copyLists;
    const filteredList = newLists.filter((el, i) => {
      return i !== listsIndex;
    });
    setCopyLists(filteredList);
  };

  return (
    <ul>
      {copyLists &&
        copyLists.map((list, index) => {
          return (
            <li key={index}>
              {list}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          );
        })}
    </ul>
  );
}
