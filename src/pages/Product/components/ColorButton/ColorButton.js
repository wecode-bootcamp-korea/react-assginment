import React from 'react';
import './ColorButton.scss';

const ColorButton = ({ color, setColor }) => {
  const handleClick = () => {
    setColor(color);
  }
  return <button onClick={handleClick} className={`colorButton ${color}`} />;
}

export default ColorButton;