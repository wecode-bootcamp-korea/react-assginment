import React, { useState, useRef } from 'react';
import './Color.scss';
import ColorButton from '../ColorButton/ColorButton';

const Color = () => {
  const [color, setColor] = useState();
  const colorBox = useRef();

  function whiteChange() {
    setColor('white');
    colorBox.current.className = 'selected white';
  }

  function redChange() {
    setColor('red');
    colorBox.current.className = 'selected red';
  }

  function yellowChange() {
    setColor('yellow');
    colorBox.current.className = 'selected yellow';
  }

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div ref={colorBox} className="selected" />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton className="colorButton white" colorChange={whiteChange} />
        <ColorButton className="colorButton red" colorChange={redChange} />
        <ColorButton
          className="colorButton yellow"
          colorChange={yellowChange}
        />
      </div>
    </div>
  );
};

export default Color;
