import React from "react";
import "../Color/Color"

function ColorButton(props) {
  //자식영역
  console.log(props);
  // const setDate(){
  //   props.setColorName(['white', 'red', 'yellow'])
  // }

  return (
    <div className="colorButton">
      <button className="{colorButton + {props.colorName}}" onClick={props.setColorName}></button>
    </div>
  );
}

export default ColorButton;