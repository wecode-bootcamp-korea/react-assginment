import React, { useState } from "react";
import ColorButton from '../ColorButton/ColorButton';
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState('white');
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div style={{ backgroundColor: color }} className="selected" />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color={'white'} onClick={() => setColor('white')} />
        <ColorButton color={'red'} onClick={() => setColor('red')} />
        <ColorButton color={'yellow'} onClick={() => setColor('yellow')} />
      </div>
    </div>
  );
};

export default Color;
