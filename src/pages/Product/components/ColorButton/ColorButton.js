import React, { useState } from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <button className={`colorButton ${props.color}`} onClick={props.change} />
  );
};

export default ColorButton;
