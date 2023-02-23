import React from "react";
import { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={"selected" + (setColor ? ` ${color}` : "")} />
        {color}
      </span>
      <ColorButton color={color} setColor={setColor} />
    </div>
  );
};

export default Color;
