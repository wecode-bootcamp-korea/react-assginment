import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {text}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            setColor("white");
            setText("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            setColor("red");
            setText("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            setColor("yellow");
            setText("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default Color;
