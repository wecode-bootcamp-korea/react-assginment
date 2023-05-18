import React, { useState } from "react";
import "./Color.scss";
import Colorbutton from "../ColorButton/ColorButton";

const Color = () => {
  const [color,setColor] = useState('');
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <Colorbutton setColor={setColor} color={'white'} />
        <Colorbutton setColor={setColor} color={'red'} />
        <Colorbutton setColor={setColor} color={'yellow'} />
      </div>
    </div>
  );
};

export default Color;
