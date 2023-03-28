import React from "react";
import "../Color/Color"

function ColorButton(props) {
  //자식영역
  console.log(props);
  // const setDate(){
  //   props.setColorName(['white', 'red', 'yellow'])
  // }

  const changeColor = () => {
    props.setColorName(props.colorName);
  }

  //{`colorButton ${props.colorName}`}
  // 중괄호 안으로 이어서 작성하면 그 이어진 문자열 그대로 인식 ->  className을 인식 못함.
  // 그렇기 때문에 $기호와 ``을 사용해서 구분지어줌
  return (
    <div className="colorButton">
      <button className={`colorButton ${props.colorName}`} onClick={changeColor}></button>
    </div>
  );
}

export default ColorButton;