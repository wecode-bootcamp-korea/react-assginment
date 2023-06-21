import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ changeColor, color }) => {
  return (
    <button
      className={`colorButton ${color}`}
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ColorButton;
