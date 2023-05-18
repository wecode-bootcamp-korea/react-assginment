/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ColorButton.scss';

const ColorButton = props => {
  const changeColor = props => {
    props.setColor(props.color);
    props.setGolfBallImg(props.golfBallImg);
  };

  return (
    <button
      className={`color-button ${props.color}`}
      onClick={() => changeColor(props)}
    />
  );
};

export default ColorButton;
