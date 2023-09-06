import React from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton"

const Color = (props) => {
  
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`}/>{props.color}
      </span>
      <div className="colorHandler">
        <ColorButton color='white' onClick={() => {props.setColor('white')}} />
        <ColorButton color='red'  onClick={() => {props.setColor('red')}}/>
        <ColorButton color='yellow' onClick={() => {props.setColor('yellow')}} />
      </div>
    </div>
  );
};

export default Color;
