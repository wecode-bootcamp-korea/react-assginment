import React, { useState } from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {

  const[color, setColor] = useState('white') 

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor : color}}/>
        {
          color
        }
      </span>

      <div className="colorHandler">
        <ColorButton color={'white'}  btn={() => setColor('white')}></ColorButton>
        <ColorButton color={'red'}  btn={() => setColor('red')}></ColorButton>
        <ColorButton color={'yellow'}  btn={() => setColor('yellow')}></ColorButton>
      </div>
    </div>
  );
};

export default Color;
