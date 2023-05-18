import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  const buttonClick = (color) => {
    props.setChange(color);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상:
        <div className="selected " style={{ backgroundColor: props.change }} />
        {props.change}
      </span>

      <div className="colorHandler">
        <ColorButton color={"white"} buttonClick={buttonClick} />
        <ColorButton color={"red"} buttonClick={buttonClick} />
        <ColorButton color={"yellow"} buttonClick={buttonClick} />
      </div>
    </div>
  );
};

export default Color;
