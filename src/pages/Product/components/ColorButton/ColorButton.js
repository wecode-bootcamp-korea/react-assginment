import "./ColorButton.scss";
import React from "react";

const ColorButton = (props) => {
  return (
    <button
      className={`colorButton ${props.color}`}
      onClick={() => {
        props.buttonClick(props.color);
      }}
    />
  );
};

export default ColorButton;
