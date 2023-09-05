import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton
          color="white"
          colorHandlerButton={() => props.colorHandlerButton("white")}
        />
        <ColorButton
          color="red"
          colorHandlerButton={() => props.colorHandlerButton("red")}
        />
        <ColorButton
          color="yellow"
          colorHandlerButton={() => props.colorHandlerButton("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;
