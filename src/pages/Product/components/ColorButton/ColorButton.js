import "./ColorButton.scss";
import React from "react";

const ColorButton = (props) => {
  const handleButton = () => {
    props.setchange(props.color);
  };

  return (
    <button
      className={`colorButton ${props.color}`}
      onClick={handleButton(props.color)}
    />
  );
};

export default ColorButton;
