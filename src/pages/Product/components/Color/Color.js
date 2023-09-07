import React from "react";
import "./Color.scss";
import "./ColorButton/ColorButton";
import ColorButton from "./ColorButton/ColorButton";

const Color = (props) => {



  const handleClick=(selectedColor)=>{

    console.log(selectedColor)
    props.colorChangeHandler(selectedColor)
  }


  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">

        <ColorButton
        selectColor='white'
        handleClick={handleClick}
        />
        <ColorButton
        selectColor='red'
        handleClick={handleClick}
        />
        <ColorButton
        selectColor='yellow'
        handleClick={handleClick}
        />

      </div>
    </div>
  );
};


export default Color;
