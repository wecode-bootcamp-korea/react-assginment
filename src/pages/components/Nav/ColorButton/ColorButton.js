import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className={`colorButton ${color}`}
      onClick={onClick}
    />
  );
};

export default ColorButton;
