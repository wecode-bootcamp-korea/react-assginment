import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.colorName}`} />
        {props.colorName}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" setColorName={props.setColorName} />
        <ColorButton color="red" setColorName={props.setColorName} />
        <ColorButton color="yellow" setColorName={props.setColorName} />
      </div>
    </div>
  );
};

export default Color;
