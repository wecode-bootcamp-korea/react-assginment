import { useState } from "react";
import "./Color.scss";

const Color = () => {
  const [colorName, setColorName] = useState('white');
  const [colorChange, setColorChange] = useState('white');

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={ {backgroundColor: colorChange } }/>
        { colorName }
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => { setColorName('white'); setColorChange('white') }} />
        <button className="colorButton red" onClick={() => { setColorName('red'); setColorChange('red')}} />
        <button className="colorButton yellow" onClick={() => { setColorName('yellow'); setColorChange('yellow') }} />
      </div>
    </div>
  );
};

export default Color;
