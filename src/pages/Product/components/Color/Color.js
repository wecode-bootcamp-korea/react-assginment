import React, {useState} from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";




const Color = () => {
  const [ color , setColor] = useState ('white') ;

  const colorHandler = (color) => {
    setColor(color)
  }

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor:color}}/>
        {`${color}`}
      </span>
      <ColorButton color={color} change={colorHandler}>
      {/* <div className="colorHandler">
        <button className="colorButton white" onClick={() => {setColor('white')}} />
        <button className="colorButton red" onClick={() => {setColor('red')}} />
        <button className="colorButton yellow" onClick={() => {setColor('yellow')}} />
      </div> */}
      </ColorButton>
    </div>
  );
};

export default Color;
