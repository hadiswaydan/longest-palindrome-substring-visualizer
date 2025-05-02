import React from "react";

export default function Box({ letter, selected, found, notFound }) {
  let boxColor = "";
  if (selected) boxColor = "#dcd1d1";
  if (found) boxColor = "lightgreen";
  if (notFound) boxColor = "red";

  return (
    <div className="box center" style={{ "--box-color": boxColor }}>
      {letter}
    </div>
  );
}
