import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const handleClick = () => {
    props.changeColor(props.color);
  };
  return (
    <button className={`colorButton ${props.color}`} onClick={handleClick} />
  );
};

export default ColorButton;
