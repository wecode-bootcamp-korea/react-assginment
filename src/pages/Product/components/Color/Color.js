import React, { useState } from 'react';
import ColorButton from '../ColorButton/ColorButton';
import './Color.scss';

const Color = props => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton
          color="white"
          setColor={props.setColor}
          golfBallImg="/images/golf-ball-white.jpg"
          setGolfBallImg={props.setGolfBallImg}
        />
        <ColorButton
          color="red"
          setColor={props.setColor}
          golfBallImg="/images/golf-ball-red.jpg"
          setGolfBallImg={props.setGolfBallImg}
        />
        <ColorButton
          color="yellow"
          setColor={props.setColor}
          golfBallImg="/images/golf-ball-yellow.jpg"
          setGolfBallImg={props.setGolfBallImg}
        />
      </div>
    </div>
  );
};

export default Color;
