import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ color, changeColor }) => {

  return (
    <button className={`colorButton ${color}`} onClick={() => changeColor(color)} />
  );
};

export default ColorButton;
