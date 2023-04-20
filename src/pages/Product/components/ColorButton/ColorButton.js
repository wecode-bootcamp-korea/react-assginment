import React from "react";

const ColorButton = (props) => {
  return (
    <div>
      <button className="colorButton white" onClick={() => props.setColor("white")}></button>
      <button className="colorButton red" onClick={() => props.setColor("red")}></button>
      <button className="colorButton yellow" onClick={() => props.setColor("yellow")}></button>
    </div>
  );
};

export default ColorButton;




