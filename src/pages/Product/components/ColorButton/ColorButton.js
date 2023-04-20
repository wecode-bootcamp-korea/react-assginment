import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <button
      className={`colorButton ${props.boxColor}`}
      onClick={() => props.handleColorChange(props.boxColor)}
    ></button>
  );
};

export default ColorButton;
