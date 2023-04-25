import React from "react";
import "./ColorBox.scss";

const ColorBox = (props) => {
  return (
    <div className="colorBox" key={props.id}>
      <div className={`color ${props.name}`}></div>
      <div>이름: {props.name}</div>
      <div>rgb: {props.rgb}</div>
    </div>
  );
};

export default ColorBox;
