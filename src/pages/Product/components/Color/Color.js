import React /*, { useState } */ from "react";
import "./Color.scss";
import "../ColorButton/ColorButton";
import ColorButton from "../ColorButton/ColorButton";

const Color = ({ color, setColor }) => {
  //const [color, setColor] = useState("white");

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        {/* <button className="colorButton white" onClick={() => {
          setColor("white");
   
        
           }} />
        <button className="colorButton red" onClick={() => {
           setColor("red");


        }} />
        <button className="colorButton yellow" onClick={() => {
           setColor("yellow");

          
        }} />  */}
      </div>
      <ColorButton color={color} setColor={setColor} />
    </div>
  );
};

export default Color;
