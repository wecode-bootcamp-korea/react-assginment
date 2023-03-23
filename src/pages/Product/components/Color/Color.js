import React, { useState, useRef } from 'react';
import './Color.scss';

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
        <button className="colorButton white" onClick={whiteChange} />
        <button className="colorButton red" onClick={redChange} />
        <button className="colorButton yellow" onClick={yellowChange} />
      </div>
    </div>
  );
};

export default Color;
