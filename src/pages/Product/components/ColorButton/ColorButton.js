import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div className="colorHandler">
      <button
        className={`colorButton ${props.color}`}
        onClick={() => {
          props.changeColor(props.color);
        }}
      />
    </div>
  );
};
export default ColorButton;
