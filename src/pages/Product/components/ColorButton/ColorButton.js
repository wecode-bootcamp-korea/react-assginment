import React from 'react';

function ColorButton({ className, colorChange }) {
  return <button className={className} onClick={colorChange} />;
}

export default ColorButton;
