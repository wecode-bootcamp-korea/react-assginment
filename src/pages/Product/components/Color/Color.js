import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  const [color, setColor] = useState("");

  const nameChange = () => {
    if (color === "red") {
      return "red";
    } else if (color === "white") {
      return "white";
    } else if (color === "yellow") {
      return "yellow";
    } else {
      return "white";
    }
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {nameChange()}
      </span>
      <div className="colorHandler">
        <ColorButton nameChange={nameChange} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;