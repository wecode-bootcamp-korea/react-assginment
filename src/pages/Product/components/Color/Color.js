import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${colorName}`} />
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" setColorName={setColorName} />
        <ColorButton color="red" setColorName={setColorName} />
        <ColorButton color="yellow" setColorName={setColorName} />
      </div>
    </div>
  );
};

export default Color;
