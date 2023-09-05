import React, {useState} from "react";
import "./Color.scss";
import ColorButton from '../ColorButton/ColorButton';

const Color = () => {

  const [color, setColor] = useState('white');

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`}/>
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" changeColor={setColor}></ColorButton>
        <ColorButton color="red" changeColor={setColor}></ColorButton>
        <ColorButton color="yellow" changeColor={setColor}></ColorButton>
      </div>
    </div>
  );
};

export default Color;
