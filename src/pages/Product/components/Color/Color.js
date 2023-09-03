import React from "react";
import { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");
  const colorHandlerButton = (e) => {
    setColor(e);
  };
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            colorHandlerButton("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            colorHandlerButton("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            colorHandlerButton("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
