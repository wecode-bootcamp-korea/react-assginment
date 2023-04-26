import React, { useState } from "react";         
import "./Color.scss";                         
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {                           
  const [color, setColor] = useState("white");   

  const changeColorWhite = () => {setColor('white')};
  const changeColorRed = () => {setColor('red')};
  const changeColorYellow = () => {setColor('yellow')};


  // const changeColor = (selectedColor) => {
  //   setColor(selectedColor);
  // };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">

        <ColorButton changeColor={changeColorWhite} color={"white"}/>

        <ColorButton changeColor={changeColorRed} color={"red"}/>
        
        <ColorButton changeColor={changeColorYellow} color={"yellow"}/>
        
      </div>
    </div>
  );
};

export default Color;