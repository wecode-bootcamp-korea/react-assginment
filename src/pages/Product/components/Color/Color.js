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
        <ColorButton color={"white"} setColor={setColor} />
        <ColorButton color={"red"} setColor={setColor} />
        <ColorButton color={"yellow"} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
