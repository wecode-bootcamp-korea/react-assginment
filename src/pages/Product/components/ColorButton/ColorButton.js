import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <button
      className={`colorButton ${props.changecolor}`}
      onClick={() => props.setColor(props.changecolor)}
    />
  );
};
export default ColorButton;
