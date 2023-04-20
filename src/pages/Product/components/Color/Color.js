import React from "react";
import { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");
  const white = () => {
    setColor("white");
  };
  const red = () => {
    setColor("red");
  };
  const yellow = () => {
    setColor("yellow");
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <ColorButton
        color={color}
        changeWhite={white}
        changeRed={red}
        changeYellow={yellow}
      />
    </div>
  );
};

export default Color;
