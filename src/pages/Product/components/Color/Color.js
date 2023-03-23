import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState("white");
  const [colorShape, setColorShape] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: colorShape }} />
        {colorName}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            setColorName("white");
            setColorShape("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            setColorName("red");
            setColorShape("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            setColorName("yellow");
            setColorShape("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
