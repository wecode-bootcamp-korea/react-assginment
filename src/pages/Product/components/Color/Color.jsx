import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {

  // 변수
  const [color, setColor] = useState(null);

  // 함수
  const changeColor = col => setColor(col);

  // 출력
  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 :
          <div className={`selected ${color}`} />
          {color}
        </span>
        <ColorButton changeColor={changeColor} />
      </div>
    </>
  );

};

export default Color;
