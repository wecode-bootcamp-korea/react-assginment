import React, { useState } from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return <button className={props.className} onClick={props.onClick} />;
};
export default ColorButton;
