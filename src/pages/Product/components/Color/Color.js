import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`${color} selected`} />
        {color}
      </span>
      <ColorButton changeColor={changeColor} />
    </div>
  );
};

export default Color;
