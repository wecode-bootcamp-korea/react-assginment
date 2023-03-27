// import { useState } from "react";
import "../ColorButton/ColorButton";
import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = (props) => {
  // const [colorName, setColorName] = useState("white");
  // const [colorChange, setColorChange] = useState("white");

  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 :
          <div
            className="selected"
            style={{ backgroundColor: props.colorChange }}
          />
          {props.colorName}
        </span>
        <ColorButton
          setColorName={props.setColorName}
          setColorChange={props.setColorChange}
        />
      </div>
    </>
  );
};
// props 전달 할때는 함수를 보내는 것인지 변수를 보내는 것인지도 생각해서 보내주자.
export default Color;
