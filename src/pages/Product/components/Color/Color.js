import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <ColorButton setColor={setColor} />
    </div>
  );
};

export default Color;
