import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [color, setColor] = useState('selected');
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={color} />
        white
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {setColor('selected white')}} />
        <button className="colorButton red" onClick={() => {setColor('selected red')}} />
        <button className="colorButton yellow" onClick={() => {setColor('selected yellow')}} />
      </div>
    </div>
  );
};

export default Color;
