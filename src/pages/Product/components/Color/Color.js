import React from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" changeColor={props.setColor} />
        <ColorButton color="yellow" changeColor={props.setColor} />
        <ColorButton color="red" changeColor={props.setColor} />
      </div>
    </div>
  );
};

export default Color;
