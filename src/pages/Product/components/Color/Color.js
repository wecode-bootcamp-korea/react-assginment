import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  let [change, setChange] = useState("");

  const buttonClick = (color) => {
    setChange(color);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상:
        <div className="selected " style={{ backgroundColor: change }} />
        {change}
      </span>

      <div className="colorHandler">
        <ColorButton
          color="white"
          change={change}
          onClick={() => buttonClick("white")}
        />
        <ColorButton
          color="red"
          change={change}
          onClick={() => buttonClick("red")}
        />
        <ColorButton
          color="yellow"
          change={change}
          onClick={() => buttonClick("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;
