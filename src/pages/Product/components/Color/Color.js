import React, { useState } from "react";
import "./Color.scss";

const Color = () => {

  // 변수
  const [color, setColor] = useState(null);

  // 함수
  const changeColor = col => {
    setColor(col);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => changeColor(`white`)} />
        <button className="colorButton red" onClick={() => changeColor(`red`)} />
        <button className="colorButton yellow" onClick={() => changeColor(`yellow`)} />
      </div>
    </div>
  );
};

export default Color;
