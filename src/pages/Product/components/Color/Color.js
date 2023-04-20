import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");
  const handleColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 : {color}
          <div className={`selected ${color}`} />
        </span>
        <div className="colorHandler">
          <ColorButton changecolor="white" setColor={handleColor} />
          <ColorButton changecolor="red" setColor={handleColor} />
          <ColorButton changecolor="yellow" setColor={handleColor} />
        </div>
      </div>
    </>
  );
};
export default Color;
