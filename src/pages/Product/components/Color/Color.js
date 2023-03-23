import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  const [colorName, setColorName] = useState("white");
  const [colorShape, setColorShape] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: colorShape }} />
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton
          colorName={colorName}
          setColorName={setColorName}
          colorShape={colorShape}
          setColorShape={setColorShape}
        />
      </div>
    </div>
  );
};

export default Color;
