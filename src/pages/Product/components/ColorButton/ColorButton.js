import React from 'react';
import './ColorButton.scss';
// import './color.scss';

const ColorButton = (props) => {
  const { color, setColor } = props;
  return (
    <div className="colorHandler">
      <button
        className={`colorButton ${color}`}
        onClick={() => {
          setColor(color);
        }}
      />
    </div>
  );
};

export default ColorButton;
