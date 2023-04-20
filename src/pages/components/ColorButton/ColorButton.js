import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <>
      <button
        className="colorButton white"
        onClick={() => {
          props.changeColor("white");
        }}
      />
      <button
        className="colorButton red"
        onClick={() => {
          props.changeColor("red");
        }}
      />
      <button
        className="colorButton yellow"
        onClick={() => {
          props.changeColor("yellow");
        }}
      />
    </>
  );
};

export default ColorButton;
