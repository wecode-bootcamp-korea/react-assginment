import React, { useState } from "react";
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
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => handleColorChange("white")}
        />
        <button
          className="colorButton red"
          onClick={() => handleColorChange("red")}
        />
        <button
          className="colorButton yellow"
          onClick={() => handleColorChange("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;
