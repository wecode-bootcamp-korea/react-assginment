import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ color, colors, changeColor }) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`${color} selected`} />
        {color}
      </span>
      <div className="colorBtn">
        {colors.map((color) => {
          return <ColorButton color={color} changeColor={changeColor} />;
        })}
      </div>
    </div>
  );
};

export default Color;
