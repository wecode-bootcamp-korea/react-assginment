import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div className="colorButton">
      <button
        className="colorButton white"
        onClick={() => {
          props.setColorName("white");
          props.setColorShape("white");
        }}
      />
      <button
        className="colorButton red"
        onClick={() => {
          props.setColorName("red");
          props.setColorShape("red");
        }}
      />
      <button
        className="colorButton yellow"
        onClick={() => {
          props.setColorName("yellow");
          props.setColorShape("yellow");
        }}
      />
    </div>
  );
};

export default ColorButton;
