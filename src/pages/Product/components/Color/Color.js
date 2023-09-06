import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");
  const colorButton = (color) => {
    setColor(color);
  };
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            colorButton("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            colorButton("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            colorButton("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
