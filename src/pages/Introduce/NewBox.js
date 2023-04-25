import React from 'react';
import './NewBox.scss';

export default function NewBox({ boxColor, color, rgbColor }) {
    return (
      <div className={`NewBox ${boxColor}`}>
        <div className="colorBox"></div>
        <div className="colorName">이름: {color}</div>
        <div className="rgbName">rgb: {rgbColor}</div>
      </div>
    );
  }

  