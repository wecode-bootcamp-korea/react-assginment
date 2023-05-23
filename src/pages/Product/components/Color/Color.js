import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {`${color}`}
      </span>
      <div className="colorbutton">
        <ColorButton setColor={setColor} color="white" />
        <ColorButton setColor={setColor} color="red" />
        <ColorButton setColor={setColor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
