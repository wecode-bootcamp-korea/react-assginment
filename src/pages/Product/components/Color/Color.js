import React, { useState } from "react";         //버튼을 누르면 바뀌는 동적인 값을 관리하기 위해 state사용
import "./Color.scss";                           //useState 함수는 Hook의 일종//

const Color = () => {                           
  const [color, setColor] = useState("white");   //변수 color, setColor는 임의의 변수.// 

  const changeColor = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => changeColor("white")}
        />
        <button
          className="colorButton red"
          onClick={() => changeColor("red")}
        />
        <button
          className="colorButton yellow"
          onClick={() => changeColor("yellow")}
        />
      </div>
    </div>
  );
};

export default Color;