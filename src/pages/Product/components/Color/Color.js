import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState('white');

  return (
    <div className="color">
      <span className="colorText" value={colorName}>
        색상 :
        <div className="selected" style={{ backgroundColor: colorName}}/>
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton colorName={colorName} setColorName={setColorName}></ColorButton>
        <ColorButton colorName={colorName} setColorName={setColorName}></ColorButton>
        <ColorButton colorName={colorName} setColorName={setColorName}></ColorButton>
        {/* <button className="colorButton white" onClick={() => setColorName('white')} />
        <button className="colorButton red" onClick={() => setColorName('red')} />
        <button className="colorButton yellow" onClick={() => setColorName('yellow')} /> */}
      </div>
    </div>
  );
};

export default Color;
