import React from 'react';
import "css-doodle";

export default function Doodle({ grid, rule = "" }) {
  return (
    <div>
        <css-doodle grid={grid}>{rule}</css-doodle>
    </div>
  )
}
