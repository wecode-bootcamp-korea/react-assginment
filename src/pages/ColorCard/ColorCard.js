import React from 'react';
import './ColorCard.scss';

const ColorCard = ({rgbValue, name }) => {
  return(
    <div className="color-card">
      <span>
        <div style={{
          backgroundColor: `rgb(${rgbValue})`
        }} className="color-box" />
        <div className="color-name">이름: {name}</div>
        <div className="color-name">rgb : {`${rgbValue}`}</div>
      </span>
    </div>
  )
}

export default ColorCard;