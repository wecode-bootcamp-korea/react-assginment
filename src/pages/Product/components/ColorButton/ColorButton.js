import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ color, setColor }) => {
  const handleClick = () => {
    setColor(color);
  };
  return <button className={`colorButton ${color}`} onClick={handleClick} />;
};

export default ColorButton;
