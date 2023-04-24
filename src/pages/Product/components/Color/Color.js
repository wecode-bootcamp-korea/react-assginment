import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({colorChange, setColorChange}) => {

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className= {`selected ${colorChange}`} />
        {colorChange}
      </span>
      <div className="colorHandler">

        <ColorButton changeColor={() => {setColorChange("white")}} changeBackground={"white"} />
        <ColorButton changeColor={() => {setColorChange("red")}} changeBackground={"red"}/>
        <ColorButton changeColor={() => {setColorChange("yellow")}} changeBackground={"yellow"}/>
        
      </div>
    </div>
  )
}

export default Color;
