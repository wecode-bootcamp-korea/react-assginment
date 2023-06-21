import React, { useState } from "react";
import ColorButton from "../../../components/Nav/ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [changedColor, setChangedColor] = useState("white");
  

  const changeColor = (color) => {
    setChangedColor(color);
  };
 
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${changedColor}`} />
        {changedColor}
      </span>
      <div className="colorHandler">
        <ColorButton
          color="white"
          onClick={() => changeColor("white")}
        />
        <ColorButton
          color="red"
          onClick={() => changeColor("red")}
        />
        <ColorButton
          color="yellow"
          onClick={() => changeColor("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;
