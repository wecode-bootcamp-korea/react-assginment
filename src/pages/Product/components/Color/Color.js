import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ color, setColor }) => {
  const colors = ["white", "red", "yellow"];

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
        {colors.map((color, idex) => {
          return (
            <ColorButton color={color} changeColor={changeColor} key={idex} />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
