import React from "react";
import { useProvider } from "../provider";
import Box from "./Box";

export default function WordRow() {
  const { word, selected, found, notFound } = useProvider();

  if (!word.length)
    return <div className="word-row placeholder-text">Enter the word</div>;

  return (
    <div className="word-row">
      {word.split("").map((letter, i) => (
        <Box
          key={i}
          letter={letter}
          found={i >= found[0] && i <= found[1]}
          notFound={i === notFound[0] || i === notFound[1]}
          selected={i >= selected[0] && i <= selected[1]}
        />
      ))}
    </div>
  );
}
