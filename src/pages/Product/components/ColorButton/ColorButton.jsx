import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ changeColor, colors }) => {

  return (
    <>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => changeColor(colors[0])} />
        <button className="colorButton red" onClick={() => changeColor(colors[1])} />
        <button className="colorButton yellow" onClick={() => changeColor(colors[2])} />
      </div>
    </>
  );
};

export default ColorButton;
