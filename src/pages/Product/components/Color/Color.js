import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const colors = ["white", "red", "yellow"];
  const [color, setColor] = useState("white");

  const changeColor = (color) => {
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
        {colors.map((color) => {
          return <ColorButton color={color} changeColor={changeColor} />;
        })}
      </div>
    </div>
  );
};

export default Color;
