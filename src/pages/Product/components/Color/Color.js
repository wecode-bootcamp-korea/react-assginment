import React, { useState } from "react";
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
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            changeColor("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            changeColor("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            changeColor("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
