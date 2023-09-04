import React, { useState } from "react";
import "./Color.scss";


const Color = () => {
  const [color, setColor] = useState("white");
  const [color2, setColor2] = useState("selected white");


  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={color2} />
        {color}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {
          setColor("white");
          setColor2("selected white");
          
           }} />
        <button className="colorButton red" onClick={() => {
           setColor("red");
           setColor2("selected red");

        }} />
        <button className="colorButton yellow" onClick={() => {
           setColor("yellow");
           setColor2("selected yellow");
          
        }} />
      </div>
    </div>
  );
};

export default Color;
