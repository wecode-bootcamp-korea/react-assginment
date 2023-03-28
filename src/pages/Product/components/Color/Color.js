import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState('white');

  // const white = () => {
  //   setColorName('white')
  // }
  // const red = () => {
  //   setColorName('red')
  // }
  // const yellow = () => {
  //   setColorName('yellow')
  // }
  //이 함수를 사용하지 않고, colorName의 값을 이용함.
  //부모 컨포넌트와 자식 컴포넌트에서 props를 티키타카해서 값을 적용...
  
  return (
    <div className="color">
      <span className="colorText" value={colorName}>
        색상 :
        <div className="selected" style={{ backgroundColor: colorName}}/>
        {colorName}
      </span>
      <div className="colorHandler">
        <ColorButton colorName='white' setColorName={setColorName}></ColorButton>
        <ColorButton colorName='red' setColorName={setColorName}></ColorButton>
        <ColorButton colorName='yellow' setColorName={setColorName}></ColorButton>
      </div>
    </div>
  );
};

export default Color;
