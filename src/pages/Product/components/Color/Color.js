import React from "react";
import "./Color.scss";
import { useState } from "react";

const Color = () => {

    const [color, setColor] = useState('');

    const nameChange =() => {

    if (color === 'red') {
      return 'red';
    } else if (color === 'white') {
      return 'white';
    } else if (color === 'yellow') {
      return 'yellow';
    } else {
      return 'white';
    }

  /*  switch(color) {
        case 'white':
        return 'white';
        case 'red':
        return 'red';
        case 'yellow':
        return 'yellow';
        default:return 'white';
      }
    }

  */

  }
    
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor : color}} />
       {nameChange()}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => setColor('white')}/>
        <button className="colorButton red" onClick={() => setColor('red')} />
        <button className="colorButton yellow" onClick={() => setColor('yellow')}>
        </button>
       
      </div>
    </div>
  );
};

export default Color;
