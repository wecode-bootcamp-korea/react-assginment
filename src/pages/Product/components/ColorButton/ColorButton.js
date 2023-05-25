import React from "react";
import '../ColorButton/ColorButton.scss';

const ColorButton = ( props ) => {
    
return (
    <div className="colorHandler">
        <button className="colorButton white" onClick={() => {props.change('white')}} />
        <button className="colorButton red" onClick={() => {props.change('red')}} />
        <button className="colorButton yellow" onClick={() => {props.change('yellow')}} />
  </div>
);

};

export default ColorButton;
