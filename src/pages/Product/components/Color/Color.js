import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={props.change1} />
        white
      </span>
      <div className="colorHandler">
        <ColorButton img={props.img} choice="white" className="colorButton white" change={props.change} preview={props.preview} setPre={props.setPre}/>
        <ColorButton img={props.img} choice="red" className="colorButton red" change={props.change} preview={props.preview} setPre={props.setPre}/>
        <ColorButton img={props.img} choice="yellow" className="colorButton yellow" change={props.change} preview={props.preview} setPre={props.setPre}/>
      </div>
    </div>
  );
};

export default Color;
