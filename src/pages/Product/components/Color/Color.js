import React from "react";
import "./Color.scss";
import Colorbutton from "../ColorButton/ColorButton";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <Colorbutton setColor={props.setColor} color={"white"} />
        <Colorbutton setColor={props.setColor} color={"red"} />
        <Colorbutton setColor={props.setColor} color={"yellow"} />
      </div>
    </div>
  );
};

export default Color;
