import React from "react";
import "./ColorButton.scss"

function ColorButton(props) {
  //자식영역
  console.log(props);
  // const setDate(){
  //   props.setColorName(['white', 'red', 'yellow'])
  // }

  // const Button = () => {
  
  //   <div className="Button">
  //     <button className="colorButton white" onClick={() => props.setColorName('white')} />
  //     <button className="colorButton red" onClick={() => props.setColorName('red')} />
  //     <button className="colorButton yellow" onClick={() => props.setColorName('yellow')} />
  //   </div>;
  // };

  return (
    <div className="colorButton">
      <button className="{colorButton + {props.colorName}}" onClick={props.colorName}></button>
    </div>
  );
}

export default ColorButton;