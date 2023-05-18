import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <>
      <button
        className={props.className}
        onClick={() => props.setColor(props.color)}
      />
    </>
  );
};

export default ColorButton;
