import React from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {

  

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`}/>
        {`${props.color}`}
      </span>
      <div className="colorHandler">
        <ColorButton className='colorButton white' color={'white'} setColor={props.setColor}/>
        <ColorButton className='colorButton red' color={'red'} setColor={props.setColor} />
        <ColorButton className='colorButton yellow' color={'yellow'} setColor={props.setColor} />
      </div>
    </div>
  );
};

export default Color;
