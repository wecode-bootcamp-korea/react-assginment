import React from "react";
import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = (props) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: props.color }} />
        {`${props.color}`}
      </span>
      <div className="colorbutton">
        <ColorButton setColor={props.setColor} color="white" />
        <ColorButton setColor={props.setColor} color="red" />
        <ColorButton setColor={props.setColor} color="yellow" />
      </div>
    </div>
  );
};

export default Color;
