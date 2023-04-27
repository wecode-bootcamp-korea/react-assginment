import React ,{useState}from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";


const Color = () => {

  const [color, setColor] = useState('white');

  const Run =  (color) => {
    setColor(color);
  }


  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{backgroundColor:color}}/>
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color={color} name='white' click={Run}/>
        <ColorButton color={color} name='red' click={Run}/>
        <ColorButton color={color} name='yellow'click={Run}/>
        
      
        {/* <button className="colorButton red" onClick={() => {setColor('red')}} />
        <button className="colorButton yellow" onClick={() => {setColor('yellow')}} /> */}
      </div>
    </div>
  );
};

export default Color;
