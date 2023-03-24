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
        <ColorButton colorName={colorName} setColorName={white}></ColorButton>
        <ColorButton colorName={colorName} setColorName={red}></ColorButton>
        <ColorButton colorName={colorName} setColorName={yellow}></ColorButton>
        {/* <button className="colorButton white" onClick={() => setColorName('white')} />
        <button className="colorButton red" onClick={() => setColorName('red')} />
        <button className="colorButton yellow" onClick={() => setColorName('yellow')} /> */}
      </div>
    </div>
  );
};

export default Color;
