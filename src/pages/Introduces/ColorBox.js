import React from "react";
import "./ColorBox.scss";

const ColorBox = ({ color, name, rgb }) => {
  return (
    <div className="colorBox">
      <div className={`colorBoxPaint ${color}`}></div>
      <p className="colorBoxName">이름: {name}</p>
      <p>rgb: {rgb}</p>
    </div>
  );
};

export default ColorBox;
