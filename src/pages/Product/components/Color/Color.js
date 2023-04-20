import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  const { selectedColor, changeColor } = props;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${selectedColor}`} />
        {selectedColor}
      </span>
      <div className="colorHandler">
        <ColorButton
          color="white"
          onClick={() => {
            changeColor("white");
          }}
        />
        <ColorButton
          color="red"
          onClick={() => {
            changeColor("red");
          }}
        />
        <ColorButton
          color="yellow"
          onClick={() => {
            changeColor("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
