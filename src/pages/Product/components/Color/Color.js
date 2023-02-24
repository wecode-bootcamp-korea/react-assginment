import React, { useState } from 'react';
import ColorButton from '../ColorButton/ColorButton';
import './Color.scss';

const Color = () => {
  const [color, setColor] = useState('white');
  // const { color, setColor } = props;
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => setColor('white')}
        />
        <button className="colorButton red" onClick={() => setColor('red')} />
        <button
          className="colorButton yellow"
          onClick={() => setColor('yellow')}
        />
      </div>
    </div>
  );
};

export default Color;
