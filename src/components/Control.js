import React, { useRef } from "react";
import { useProvider } from "../provider";
import SelectAlgorithm from "./SelectAlgorithm";
import SelectSpeed from "./SelectSpeed";

export default function Control() {
  const { running, algos, run, updateApp, updateColor } = useProvider();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.blur();
    run();
  };

  const onWordChange = (e) => {
    if (!running) {
      updateApp({ word: e.target.value });
      updateColor({ found: [-1, -1], longest: [-1, -1] });
    }
  };

  const onSelectAlgorithm = (selected) => {
    updateApp({ selectedAlgo: algos[selected.value] });
  };

  return (
    <form ref={formRef} autoComplete="off" className="controls-form">
      <div className="select">
        <div className="row">
          <span className="label">Algorithm:</span>
          <SelectAlgorithm onChange={onSelectAlgorithm} />
          <span className="label">Speed:</span>
          <SelectSpeed />
        </div>
      </div>
      <div className="row input-row">
        <input
          className="input"
          onChange={onWordChange}
          name="word"
          type="text"
          maxLength={16}
        />
        <input type="submit" onClick={onSubmit} className="submit" />
      </div>
    </form>
  );
}

