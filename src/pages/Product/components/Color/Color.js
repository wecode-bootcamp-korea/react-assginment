import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  let [textColor, setTextColor] = useState("red");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${textColor}`} />
        {textColor}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            setTextColor("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            setTextColor("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            setTextColor("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
