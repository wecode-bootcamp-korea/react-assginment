import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.boxColor}`} />
        {props.boxColor}
      </span>
      <div className="colorHandler">
        <ColorButton
          boxColor="red"
          handleColorChange={props.handleColorChange}
        />
        <ColorButton
          boxColor="yellow"
          handleColorChange={props.handleColorChange}
        />
        <ColorButton
          boxColor="white"
          handleColorChange={props.handleColorChange}
        />
      </div>
    </div>
  );
};

export default Color;
