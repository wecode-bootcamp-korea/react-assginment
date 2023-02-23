import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  let [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>

      <div className="colorButton">
        <div className="colorHandler">
          <button
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
          />
        </div>
      </div>
    </div>
  );
};

export default Color;

// import ColorButton from "../ColorButton/ColorButton";

// {
//   let changeColor = (i) => {
//     let copy = [...color];
//     copy.splice(i, 1);
//     setColor(copy);
//   };

//  <ColorButton change={changeColor} />
