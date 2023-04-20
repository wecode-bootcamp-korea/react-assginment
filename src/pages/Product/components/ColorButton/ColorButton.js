import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div className="colorHandler">
      <button className="colorButton white" onClick={props.changeWhite} />
      <button className="colorButton red" onClick={props.changeRed} />
      <button className="colorButton yellow" onClick={props.changeYellow} />
    </div>
  );
};

export default ColorButton;
