import React, {useState} from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {

  const [color, setColor] = useState('white');

  const changeColorWhite = () => {
    setColor("white");
  }


  const changeColorRed = () => {
    setColor("red");
  }


  const changeColorYellow = () => {
    setColor("yellow");
  }


  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor : color}} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton changeColor = {changeColorWhite} changeBackground={"white"}/>
        <ColorButton changeColor = {changeColorRed} changeBackground={"red"}/>
        <ColorButton changeColor = {changeColorYellow} changeBackground={"yellow"}/>
      </div>
    </div>
  );
};

export default Color;
