import React from "react";
import "./Color.scss";
import ColorButton from '../ColorButton/ColorButton';

const Color = (props) => {

  // const [color, setColor] = useState('white');

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`}/>
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" changeColor={props.changeColor}></ColorButton>
        <ColorButton color="red" changeColor={props.changeColor}></ColorButton>
        <ColorButton color="yellow" changeColor={props.changeColor}></ColorButton>
      </div>
    </div>
  );
};

export default Color;
