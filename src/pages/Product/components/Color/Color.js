import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className= {`selected ${props.colorChange}`} />
        {props.colorChange}
      </span>
      <div className="colorHandler">

        <ColorButton changeColor={() => {props.setColorChange("white")}} changeBackground={"white"} />
        <ColorButton changeColor={() => {props.setColorChange("red")}} changeBackground={"red"}/>
        <ColorButton changeColor={() => {props.setColorChange("yellow")}} changeBackground={"yellow"}/>
        
      </div>
    </div>
  )
}

export default Color;
