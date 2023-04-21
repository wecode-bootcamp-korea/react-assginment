import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({color, setColor}) => {

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton  className='colorButton white' ProductSetColor={() => setColor('white')}/>
        <ColorButton  className='colorButton red' ProductSetColor={() => setColor('red')}/>
        <ColorButton  className='colorButton yellow' ProductSetColor={() => setColor('yellow')}/>
      </div>
    </div>
  );
};

export default Color;
