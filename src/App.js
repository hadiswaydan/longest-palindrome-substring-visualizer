import "./App.css";
import React from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import WordRow from "./components/WordRow";
import Answer from "./components/Answer";

export default function App() {
  return (
    <div className="container">
      <Title />
      <Control />
      <WordRow />
      <Answer />
    </div>
  );
}
