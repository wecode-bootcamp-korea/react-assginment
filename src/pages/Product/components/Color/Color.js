import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./Color.scss";

const Color = () => {
  let [change, setChange] = useState("white");

  const buttonClick = (color) => {
    setChange(color);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상:
        <div className="selected" style={{ backgroundColor: change }} />
        {change}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => buttonClick("white")}
        />
        <button
          className="colorButton red"
          onClick={() => buttonClick("red")}
        />
        <button
          className="colorButton yellow"
          onClick={() => buttonClick("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;
