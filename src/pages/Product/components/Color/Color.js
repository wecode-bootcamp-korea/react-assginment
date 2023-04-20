import React, {useState} from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

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
        <ColorButton className='colorButton white' color={'white'} setColor={setColor}/>
        <ColorButton className='colorButton red' color={'red'} setColor={setColor} />
        <ColorButton className='colorButton yellow' color={'yellow'} setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
