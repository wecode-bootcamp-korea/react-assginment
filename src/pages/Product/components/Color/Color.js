import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: colorName }} />
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton
          className="colorButton white"
          onClick={() => {
            setColorName("white");
          }}
        />
        <ColorButton
          className="colorButton red"
          onClick={() => {
            setColorName("red");
          }}
        />
        <ColorButton
          className="colorButton yellow"
          onClick={() => {
            setColorName("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
