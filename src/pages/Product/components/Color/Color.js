import React, { useState } from 'react';
import './Color.scss';

const Color = () => {
  const [color, setColor] = useState('white');

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">{/* <ColorButton props=/> */}</div>
    </div>
  );
};

export default Color;
