import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState('white');

  const white = () => {
    setColorName('white')
  }
  const red = () => {
    setColorName('red')
  }
  const yellow = () => {
    setColorName('yellow')
  }
  
  return (
    <div className="color">
      <span className="colorText" value={colorName}>
        색상 :
        <div className="selected" style={{ backgroundColor: colorName}}/>
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton colorName={'white'} setColorName={white}></ColorButton>
        <ColorButton colorName={'red'} setColorName={red}></ColorButton>
        <ColorButton colorName={'yellow'} setColorName={yellow}></ColorButton>
      </div>
    </div>
  );
};

export default Color;
