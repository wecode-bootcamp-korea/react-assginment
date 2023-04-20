import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ colors, color, changeColor }) => {

  return (
    <>
      <div className="colorHandler">
        <button className={`colorButton ${colors[0]} ${color === colors[0] ? 'zUp' : 'zDown'}`} onClick={() => changeColor(colors[0])} />
        <button className={`colorButton ${colors[1]} ${color === colors[1] ? 'zUp' : 'zDown'}`} onClick={() => changeColor(colors[1])} />
        <button className={`colorButton ${colors[2]} ${color === colors[2] ? 'zUp' : 'zDown'}`} onClick={() => changeColor(colors[2])} />
      </div>
    </>
  );
};

export default ColorButton;
