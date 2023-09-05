import "./Color.scss";
import React, { useState }  from "react";

const Color = () => {
  
  const [color, setColor] = useState('whited');


  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`}/>
        {color}
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