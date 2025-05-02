import React from "react";
import Slider from "@mui/material/Slider";
import { useProvider } from "../provider";

export default function SelectSpeed() {
  const { setDelay, running } = useProvider();

  function handleSliderChange(_, newValue) {
    setDelay(getDelay(newValue));
  }

  function getDelay(value) {
    if (value < 35) {
      return 900 - value * 10;
    }
    return 750 - value * 10;
  }

  return (
    <Slider
      size="small"
      sx={{ width: 150 }}
      defaultValue={35}
      min={20}
      max={50}
      aria-label="Small"
      onChange={handleSliderChange}
      disabled={running}
    />
  );
}
