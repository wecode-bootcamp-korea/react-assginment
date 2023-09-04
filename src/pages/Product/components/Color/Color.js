import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState('white');

  const colorHandler = (color) => {   
    setColor(color);
  }

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {colorHandler('white')}} />
        <button className="colorButton red" onClick={() => {colorHandler('red')}} />
        <button className="colorButton yellow" onClick={() => {colorHandler('yellow')}} />
      </div>
    </div>
  );
};

export default Color;
