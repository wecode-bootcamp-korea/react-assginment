import React from "react";
import "./ColorBox.scss";
const ColorBox = ({ name, rgb }) => {
  return (
    <div className="color-box">
      <div className="different-color" style={{ backgroundColor: name }}></div>
      <div className="letter">
        <span>이름 : {name}</span>
        <span>rgb : {rgb}</span>
      </div>
    </div>
  );
};

export default ColorBox;
