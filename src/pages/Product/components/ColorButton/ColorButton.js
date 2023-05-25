import React from "react";
import '../ColorButton/ColorButton.scss';

const ColorButton = ( props ) => {
    
  console.log(props.color);
return (
<button className={`colorButton ${props.color}`} onClick={ ()=> props.change(props.color)} />

);
};
export default ColorButton;