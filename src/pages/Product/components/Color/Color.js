import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  // const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton color={"white"} setColor={props.setColor} />
        <ColorButton color={"red"} setColor={props.setColor} />
        <ColorButton color={"yellow"} setColor={props.setColor} />

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
