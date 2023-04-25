import React from "react";
import "./ColorBox.scss";

const ColorBox = ({ name, rgb }) => {
  return (
    <div className="colorBox">
      <div className="colorImg" style={{ backgroundColor: name }}></div>
      <div>이름 : {name}</div>
      <div>rgb : {rgb}</div>
    </div>
  );
};

export default ColorBox;
