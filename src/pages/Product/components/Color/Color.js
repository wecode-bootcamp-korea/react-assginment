import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ color, setcolor }) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton setcolor={setcolor} color="white" />
        <ColorButton setcolor={setcolor} color="red" />
        <ColorButton setcolor={setcolor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
