import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const { color, onClick } = props;

  return <button className={`colorButton ${color}`} onClick={onClick} />;
};

export default ColorButton;
