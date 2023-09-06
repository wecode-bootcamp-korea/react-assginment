import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  console.log(props);
  return (
    <div>
      <button className={`colorButton ${props.color}`}
        onClick={() => props.setColor("white")}
      />
        <button className={`colorButton ${props.color}`}
        onClick={() => props.setColor("red")}
      />
        <button className={`colorButton ${props.color}`}
        onClick={() => props.setColor("yellow")}
      />
    </div>
  );
};

export default ColorButton;