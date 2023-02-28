import React, {useState} from "react";
import "../Color/Color.scss";

const ColorButton = (props) => {
  const {color, setColor} = props
  return (
    <>
    <button className={`colorButton ${color}`} onClick={() => {setColor(color)} }/>
    </>
  );
};

export default ColorButton;
