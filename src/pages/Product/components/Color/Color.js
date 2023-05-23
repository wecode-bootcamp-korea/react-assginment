import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color={"white"} setColor={setColor} />
        <ColorButton color={"red"} setColor={setColor} />
        <ColorButton color={"yellow"} setColor={setColor} />

        {/* <button
          className="colorButton white"
          onClick={() => {
            setColor("white");
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            setColor("red");
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            setColor("yellow");
          }}
        /> */}
      </div>
    </div>
  );
};

export default Color;
