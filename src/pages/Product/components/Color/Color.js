import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ textColor, setTextColor, colors }) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${textColor}`} />
        {textColor}
      </span>
      <div className="colorHandler">
        {colors.map((textColor) => {
          return (
            <ColorButton textColor={textColor} setTextColor={setTextColor} />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
