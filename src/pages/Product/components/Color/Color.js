import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  const whiteClick = () => {
    setColor("white");
  };

  const redClick = () => {
    setColor("red");
  };

  const yellowClick = () => {
    setColor("yellow");
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={whiteClick} />
        <button className="colorButton red" onClick={redClick} />
        <button className="colorButton yellow" onClick={yellowClick} />
      </div>
    </div>
  );
};

export default Color;
