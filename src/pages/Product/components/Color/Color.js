import React from "react";
import { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
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
        <ColorButton
          color="white"
          colorHandlerButton={() => colorHandlerButton("white")}
        ></ColorButton>
        <ColorButton
          color="red"
          colorHandlerButton={() => colorHandlerButton("red")}
        ></ColorButton>
        <ColorButton
          color="yellow"
          colorHandlerButton={() => colorHandlerButton("yellow")}
        ></ColorButton>
      </div>
    </div>
  );
};

export default Color;
