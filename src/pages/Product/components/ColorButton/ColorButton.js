import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ color, setcolor }) => {
  return (
    <button
      className={`colorButton ${color}`}
      onClick={() => {
        setcolor(`${color}`);
      }}
    />
  );
};

export default ColorButton;
