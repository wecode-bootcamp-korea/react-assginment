import React from "react";
import "./ColorButton.scss";

const ColorButton = ({ colors, changeColor }) => {

  return (
    <>
      <button className={`colorButton ${colors}`} onClick={() => changeColor(colors)} />
    </>
  );
};

export default ColorButton;
