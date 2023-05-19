import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ color, setColor }) => {
  return (
    <button
      className={`colorButton ${color}`}
      onClick={() => {
        setColor(color);
      }}
    />
  );
};

export default ColorButton;
