import React from 'react';
import ColorButton from '../ColorButton/ColorButton';
import './Color.scss';

const Color = props => {
  const { color, setColor } = props;

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
