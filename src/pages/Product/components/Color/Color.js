import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState('red'); //state 수정 

  return (
    <div className="color">
      <span className="colorText">
        색상 :
      <div className={`selected ${color}`}/>{color}
       White
      </span>
      <div className="colorHandler">
      <button className="colorButton white" onClick={() => setColor("white")} />
        <button className="colorButton red" onClick={() => setColor("red")} />
        <button className="colorButton yellow" onClick={() => setColor("yellow")} />
      </div>
    </div>
  );
};

export default Color;