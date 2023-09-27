import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";
import ColorView from "../ColorView/ColorView";


const Color = (props) => {

  return (
    <div className="color">
        <ColorView color={props.color} />
      <div className="colorHandler">
        <ColorButton color='white' onClick={() => {props.setColor('white')}} />
        <ColorButton color='red'  onClick={() => {props.setColor('red')}}/>
        <ColorButton color='yellow' onClick={() => {props.setColor('yellow')}} />
      </div>
    </div>
  );
};

export default Color;
