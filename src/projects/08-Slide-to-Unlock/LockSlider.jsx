import React from "react";
import "./LockSlider.css";
export default function LockSlider({handleInput, sliderValue, width}) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    background: "#AED6F1",
    borderRadius: "30px",
  };
  return (
    <input
      type="range"
      className="slider mb-2 border-5"
      style={sliderStyle}
      value={sliderValue}
      onInput={handleInput}
    />
  );
}
