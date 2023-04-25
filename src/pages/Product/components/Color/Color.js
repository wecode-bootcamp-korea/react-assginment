import React, { useState } from "react";         //버튼을 누르면 바뀌는 동적인 값을 관리하기 위해 state사용
import "./Color.scss";                           //useState 함수는 Hook의 일종//

const Color = () => {                            /함수만들기, const 새롭게만들함수 = () => {} , color 컴포넌트 만들기 /
  const [color, setColor] = useState("white");   //변수 color, setColor는 다름 이름으로 바뀔 수 있습니다.// 

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