import React from "react";
import "./ColorButton.scss";

const ColorButton = (boxColor, handleColorChange) => {
  return (
    <button
      className={`colorButton ${boxColor}`}
      onClick={() => handleColorChange(boxColor)}
    ></button>
  );
};

export default ColorButton;
