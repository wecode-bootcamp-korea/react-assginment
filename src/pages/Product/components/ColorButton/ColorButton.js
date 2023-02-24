import React, {useState} from "react";
import "../Color/Color.scss";

const ColorButton = (props) => {
  const {color} = props
  return (
    <>
    <button className={`colorButton ${color}`} onClick={() => {props.setColor(color)} }/>
    {/* <button className="colorButton red" onClick={() => {props.setColor("red")}} />
    <button className="colorButton yellow" onClick={() => {props.setColor("yellow")}} /> */}
    </>
  );
};

export default ColorButton;
