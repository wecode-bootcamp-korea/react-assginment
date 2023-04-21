import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton setcolor={props.setcolor} color="white" />
        <ColorButton setcolor={props.setcolor} color="red" />
        <ColorButton setcolor={props.setcolor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
