import React from "react";

const ColorButton = (props) => {
  return (
    <>
      <div className="colorHandler">
        <button
          className="colorButton white"
          onClick={() => {
            {
              props.changeColor("white");
            }
          }}
        />
        <button
          className="colorButton red"
          onClick={() => {
            {
              props.changeColor("red");
            }
          }}
        />
        <button
          className="colorButton yellow"
          onClick={() => {
            {
              props.changeColor("yellow");
            }
          }}
        />
      </div>
    </>
  );
};

export default ColorButton;
