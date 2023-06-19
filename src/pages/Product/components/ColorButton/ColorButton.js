import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  console.log(props.color);
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
