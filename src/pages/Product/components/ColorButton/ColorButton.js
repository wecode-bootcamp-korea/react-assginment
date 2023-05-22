import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <button
      className={`colorButton ${props.colorName}`}
      onClick={() => {
        props.setColorName(props.colorName);
      }}
    />
  );
};

export default ColorButton;
