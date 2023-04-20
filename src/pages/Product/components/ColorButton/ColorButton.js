import React from "react";
import "./ColorButton.scss";

function ColorButton(props) {
  return (
    <button
      className={`colorButton ${props.color}`}
      onClick={() => props.setColor(`${props.color}`)}
    />
  );
}

export default ColorButton;
