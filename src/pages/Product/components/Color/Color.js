import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [ state, setState ] = useState("white")
  
  
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor:state
        }}/>
        {state}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {setState("white")}} />
        <button className="colorButton red" onClick={() => {setState("red")}} />
        <button className="colorButton yellow" onClick={() => {setState("yellow")}} />
      </div>
    </div>
  );
};

export default Color;
