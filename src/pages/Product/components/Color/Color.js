import React, { useState } from "react";
import { flushSync } from "react-dom";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  let [change, setChange] = useState("");
  let [btnColor, setBtnColor] = useState(["white", "red", "yellow"]);

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
        <ColorButton color={btnColor[0]} buttonClick={buttonClick} />
        <ColorButton color={btnColor[1]} buttonClick={buttonClick} />
        <ColorButton color={btnColor[2]} buttonClick={buttonClick} />
      </div>
    </div>
  );
};

export default Color;
