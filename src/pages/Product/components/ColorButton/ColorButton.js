import React from "react";
import "./ColorButton.scss";

function ColorButton(props) {
  console.log("button props show up!!!!! ", props);

  return (
    <button
      className={`colorButton ${props.color}`}
      onClick={() => {
        props.setColor(`${props.color}`);
        // props.setImg(`/images/golf-ball-${props.color}.jpg`);
      }}
    />
  );
}

export default ColorButton;
