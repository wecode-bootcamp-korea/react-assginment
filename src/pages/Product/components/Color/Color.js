import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  const { colorName, setColorName } = props;
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${colorName}`} />
        {props.colorName}
      </span>
      <div className="colorHandler">
        <ColorButton colorName="white" setColorName={setColorName} />
        <ColorButton colorName="red" setColorName={setColorName} />
        <ColorButton colorName="yellow" setColorName={setColorName} />
      </div>
    </div>
  );
};

export default Color;
