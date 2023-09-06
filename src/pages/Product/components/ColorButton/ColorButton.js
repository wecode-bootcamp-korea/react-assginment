import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div>
      <button
        className={`colorButton ${props.color}`}
        onClick={() => {
          props.setColor(props.color);
        }}
      />
    </div>
  );
};

export default ColorButton;
