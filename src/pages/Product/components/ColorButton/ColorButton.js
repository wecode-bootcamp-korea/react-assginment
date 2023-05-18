/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ColorButton.scss';

const ColorButton = props => {
  return (
    <button
      className={`color-button ${props.color}`}
      onClick={() => props.setColor(props.color)}
    />
  );
};

export default ColorButton;
