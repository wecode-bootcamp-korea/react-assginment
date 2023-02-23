import React from 'react';
import './ColorButton.scss';

const ColorButton = props => {
  const { setColor } = props;
  return (
    <>
      <button
        className="colorButton white"
        onClick={() => {
          setColor('white');
        }}
      />
      <button
        className="colorButton red"
        onClick={() => {
          setColor('red');
        }}
      />
      <button
        className="colorButton yellow"
        onClick={() => {
          setColor('yellow');
        }}
      />
    </>
  );
};

export default ColorButton;
