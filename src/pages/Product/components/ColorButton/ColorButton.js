import React from "react";
import "./ColorButton.scss";


const ColorButton = ({ color, changeColor }) => {
  
    return (
      <div className="colorHandler">
      <button className={`colorButton ${color}`} onClick={()=>{changeColor(color)}} />
    </div>
    )
    
  
  };
  

export default ColorButton;