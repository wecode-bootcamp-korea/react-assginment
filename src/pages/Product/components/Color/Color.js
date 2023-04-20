import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [change, setChange] = useState('selected');
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={change} />
        white
      </span>
      <div className="colorHandler">
        <ColorButton choice="white" className="colorButton white" change={setChange}/>
        <ColorButton choice="red" className="colorButton red" change={setChange}/>
        <ColorButton choice="yellow" className="colorButton yellow" change={setChange}/>
      </div>
    </div>
  );
};

export default Color;
