import React from "react";
import ColorButton from '../ColorButton/ColorButton';
import "./Color.scss";

const Color = ({color, setColor}) => {

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div style={{ backgroundColor: color }} className="selected" />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color={'white'} setColor={setColor} />
        <ColorButton color={'red'} setColor={setColor} />
        <ColorButton color={'yellow'} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
