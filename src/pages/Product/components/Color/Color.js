import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  const [colorShape, setColorShape] = useState("white");
  //const [colorGolf, setColorGolf] =useState()

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: colorShape }} />
        {props.colorName}
      </span>
      <div className="colorHandler">
        <ColorButton
          colorName={props.colorName}
          setColorName={props.setColorName}
          colorShape={colorShape}
          setColorShape={setColorShape}
        />
      </div>
    </div>
  );
};

export default Color;
