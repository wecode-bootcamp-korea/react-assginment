import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div
          className="selected"
          style={{ backgroundColor: props.colorName }}
        />
        {props.colorName}
      </span>
      <div className="colorHandler">
        <ColorButton
          className="colorButton white"
          onClick={() => {
            props.setColorName("white");
            props.setProductImg("/images/golf-ball-white.jpg");
            props.setColorChip("colorButton white");
          }}
        />
        <ColorButton
          className="colorButton red"
          onClick={() => {
            props.setColorName("red");
            props.setProductImg("/images/golf-ball-red.jpg");
            props.setColorChip("colorButton red");
          }}
        />
        <ColorButton
          className="colorButton yellow"
          onClick={() => {
            props.setColorName("yellow");
            props.setProductImg("/images/golf-ball-yellow.jpg");
            props.setColorChip("colorButton yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
