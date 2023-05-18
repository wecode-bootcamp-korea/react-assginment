import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton
          className="colorButton white"
          color="white"
          setColor={setColor}
        />
        <ColorButton
          className="colorButton red"
          color="red"
          setColor={setColor}
        />
        <ColorButton
          className="colorButton yellow"
          color="yellow"
          setColor={setColor}
        />
      </div>
    </div>
  );
};

export default Color;
