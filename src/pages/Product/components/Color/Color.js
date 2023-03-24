import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
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
            props.setProductImg("/images/golf-ball-white.jpg");
            props.setColorChip("colorButton white");
          }}
        />
        <ColorButton
          className="colorButton red"
          onClick={() => {
            setColorName("red");
            props.setProductImg("/images/golf-ball-red.jpg");
            props.setColorChip("colorButton red");
          }}
        />
        <ColorButton
          className="colorButton yellow"
          onClick={() => {
            setColorName("yellow");
            props.setProductImg("/images/golf-ball-yellow.jpg");
            props.setColorChip("colorButton yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
