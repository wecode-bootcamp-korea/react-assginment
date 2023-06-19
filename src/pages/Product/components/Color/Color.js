import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [textColor, setTextColor] = useState("white");

  const colors = ["white", "red", "yellow"];

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${textColor}`} />
        {textColor}
      </span>
      <div className="colorHandler">
        {colors.map((ele, idx) => {
          return <ColorButton textColor={ele} setTextColor={setTextColor} />;
        })}
      </div>
    </div>
  );
};

export default Color;
