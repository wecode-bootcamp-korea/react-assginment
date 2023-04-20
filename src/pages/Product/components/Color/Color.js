import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  console.log("color props 누구야? ", props);

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${props.color}`} />
        {props.color}
      </span>
      <div className="colorHandler">
        <ColorButton
          setColor={props.setColor}
          color="white"
          onClick={props.setImg(`/images/golf-ball-${props.color}.jpg`)}
        />
        <ColorButton setColor={props.setColor} color="red" />
        <ColorButton setColor={props.setColor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
