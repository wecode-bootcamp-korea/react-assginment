import React, {useState} from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {

  const changeColorWhite = () => {
    props.setColorChange("white")
  };
  const changeColorRed = () => {
    props.setColorChange("red")
  };
  const changeColorYellow = () => {
    props.setColorChange("yellow")
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className= {`selected ${props.colorChange}`} />
        {props.colorChange}
      </span>
      <div className="colorHandler">
        <ColorButton changeColor={changeColorWhite} changeBackground={"white"} />
        <ColorButton changeColor={changeColorRed} changeBackground={"red"}/>
        <ColorButton changeColor={changeColorYellow} changeBackground={"yellow"}/>
      </div>
    </div>
  )
}

export default Color;
