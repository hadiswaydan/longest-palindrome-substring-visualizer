import React from "react";
import { useProvider } from "../provider";

export default function Answer() {
  const { word, longest } = useProvider();
  const current = word ? word.substring(longest[0], longest[1] + 1) : "";

  return (
    <div className="answer-container">
      <div className="answer-label">Result</div>
      <div className="answer-text">{current && current}</div>
    </div>
  );
}
