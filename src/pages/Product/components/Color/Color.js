import React, { useState } from "react";
import "./Color.scss";

const Color = (props) => {

  const [colorName, setColorName] = useState('white');

  return (
    <div className="color">
      <span className="colorText" value={colorName}>
        색상 :
        <div className="selected" style={{ backgroundColor: colorName }}/>
        white
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => setColorName('white')} />
        <button className="colorButton red" onClick={() => setColorName('red')} />
        <button className="colorButton yellow" onClick={() => setColorName('yellow')} />
      </div>
    </div>
  );
};

export default Color;
