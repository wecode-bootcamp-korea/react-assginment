import React, {useState} from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [ state, setState ] = useState("white")

  const changeColorWhite = () => {
    setState("white")
  };
  const changeColorRed = () => {
    setState("red")
  };
  const changeColorYellow = () => {
    setState("yellow")
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{
          backgroundColor: state
        }} />
        {state}
      </span>
      <div className="colorHandler">
        <ColorButton changeColor={changeColorWhite} changeBackground={"white"} />
        <ColorButton changeColor={changeColorRed} changeBackground={"red"}/>
        <ColorButton changeColor={changeColorYellow} changeBackground={"yellow"}/>
      </div>
    </div>
  )
}

export default Color;
