import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div className="colorHandler">
      <button
        className="colorButton white"
        onClick={() => props.handleColorChange("white")}
      />
      <button
        className="colorButton red"
        onClick={() => props.handleColorChange("red")}
      />
      <button
        className="colorButton yellow"
        onClick={() => props.handleColorChange("yellow")}
      />
    </div>
  );
};

export default ColorButton;
