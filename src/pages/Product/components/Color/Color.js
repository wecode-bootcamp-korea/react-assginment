import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

import { useState } from "react";

const Color = () => {
  let [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton setColor={setColor} color={"white"} />
        <ColorButton setColor={setColor} color={"red"} />
        <ColorButton setColor={setColor} color={"yellow"} />
      </div>
    </div>
  );
};

export default Color;
