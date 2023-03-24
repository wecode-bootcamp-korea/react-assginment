import React, { useState } from "react";
import "./ColorButton.scss";

const White = (props) => {
  return <button className={props.className} onClick={props.onClick} />;
};

const Red = (props) => {
  return <button className={props.className} onClick={props.onClick} />;
};

const Yellow = (props) => {
  return <button className={props.className} onClick={props.onClick} />;
};

const ColorButton = () => {
  const [colorName, setColorName] = useState("white");

  return (
    <div className="colorButton">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: colorName }} />
        {colorName}
      </span>
      <div className="colorHandler">
        <White
          className="colorButton white"
          onClick={() => {
            setColorName("white");
          }}
        />
        <Red
          className="colorButton red"
          onClick={() => {
            setColorName("red");
          }}
        />
        <Yellow
          className="colorButton yellow"
          onClick={() => {
            setColorName("yellow");
          }}
        />
      </div>
    </div>
  );
};

export default ColorButton;
