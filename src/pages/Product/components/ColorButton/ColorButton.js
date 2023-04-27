import React from "react";         
import "./Colorbutton.scss";                          

const ColorButton = (props) => {
    console.log(props);
    const variable = '상수'
    const text = `여기는  ${variable}가 들어오는 자리`
  return (
    <button className={`colorButton ${props.color}`} onClick={props.changeColor}/>
     )
}

export default ColorButton;