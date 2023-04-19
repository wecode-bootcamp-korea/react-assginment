import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ changeColor }) => {
  return (
    <>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => changeColor(`white`)} />
        <button className="colorButton red" onClick={() => changeColor(`red`)} />
        <button className="colorButton yellow" onClick={() => changeColor(`yellow`)} />
      </div>
    </>
  );
};

export default ColorButton;
