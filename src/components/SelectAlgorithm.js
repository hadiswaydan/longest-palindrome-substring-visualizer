import React from "react";
import Select from "react-select";
import { useProvider } from "../provider";

export default function SelectAlgorithm({ onChange }) {
  const { algos } = useProvider();
  const options = algos.map((algo, i) => ({ value: i, label: algo.algoName }));
  const styles = {
    option: (provided, _) => ({
      ...provided,
      color: "black",
    }),
    singleValue: (provided, _) => ({
      ...provided,
      color: "black",
    }),
    control: (provided, _) => ({
      ...provided,
      height: 40,
      width: 240,
      borderRadius: 10,
    }),
  };

  return (
    <Select
      styles={styles}
      defaultValue={options[0]}
      options={options}
      onChange={onChange}
    />
  );
}
