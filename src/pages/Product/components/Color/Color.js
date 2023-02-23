import React, {useState} from "react";
import "../ColorButton/ColorButton.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = () => {
  const [color, setColor] = useState("white");
  
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={ "selected" + (setColor ? ` ${color}` : '') } />
        {color}
      </span>
      <div className="colorHandler">
      <ColorButton setColor={setColor}/>
      </div>
    </div>
  );
};

export default Color;
