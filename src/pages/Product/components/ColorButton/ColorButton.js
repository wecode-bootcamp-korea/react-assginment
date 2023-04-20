import React from "react";
import './ColorButton.scss';

const ColorButton = (props) => {

  const changeColor = () => {
    props.setColor(props.color);
  }

  return (
    <button className={`colorButton ${props.color}`} onClick={changeColor} />
  )
}

export default ColorButton;