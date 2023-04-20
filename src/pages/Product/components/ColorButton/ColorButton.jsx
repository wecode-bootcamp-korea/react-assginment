import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ changeColor, colors, upColor }) => {

  return (
    <>
      <div className="colorHandler">
        <button className="colorButton white" style={{ zIndex: upColor[0] }} onClick={() => changeColor(colors[0])} />
        <button className="colorButton red" style={{ zIndex: upColor[1] }} onClick={() => changeColor(colors[1])} />
        <button className="colorButton yellow" style={{ zIndex: upColor[2] }} onClick={() => changeColor(colors[2])} />
      </div>
    </>
  );
};

export default ColorButton;
