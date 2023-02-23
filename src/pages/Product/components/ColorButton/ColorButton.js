import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div className="colorButton">
      <div className="colorHandler">
        <button className="colorButton white" onClick={props.change} />
        <button className="colorButton red" onClick={props.change} />
        <button className="colorButton yellow" onClick={props.change} />
      </div>
    </div>
  );
};

export default ColorButton;
