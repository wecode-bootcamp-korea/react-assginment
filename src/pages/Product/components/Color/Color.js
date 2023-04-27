import React, { useState } from "react";         
import "./Color.scss";                         
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {                           

  const changeColor = (color) => {
    props.setColor(color)
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: props.color }} />
        {props.color}
      </span>
      <div className="colorHandler">

        <ColorButton changeColor={()=>changeColor("white")} color={"white"}/>

        <ColorButton changeColor={()=>changeColor("red")} color={"red"}/>
        
        <ColorButton changeColor={()=>changeColor("yellow")} color={"yellow"}/>
        
      </div>
    </div>
  );
};

export default Color;