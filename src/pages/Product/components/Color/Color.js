import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [boxColor, setBoxColor] = useState("white");
  const handleColorChange = (X) => {
    setBoxColor(X);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${boxColor}`} />
        {boxColor}
      </span>
      <ColorButton
        boxColor={boxColor}
        setBoxColor={setBoxColor}
        handleColorChange={handleColorChange}
      />
    </div>
  );
};

export default Color;
