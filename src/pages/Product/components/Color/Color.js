import React, { useState } from "react";
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
        {/* 1.inline style -> style={{ }}   2. className  */}
        <div className={`selected ${changedColor}`} />
        {changedColor}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            changeColor("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            changeColor("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            changeColor("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;

