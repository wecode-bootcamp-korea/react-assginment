import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [counter, setCounter] = useState(1);
  const increaseNumber = () => {
    setCounter(counter + 1);
  };
  const decreaseNumber = () => {
    setCounter(counter - 1);
    if (counter <= 1) return setCounter(0);
  };
  const resetNumber = () => {
    setCounter(1);
  };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            decreaseNumber();
          }}
        >
          -
        </button>
        <div className="countInputText">{counter}</div>
        <button
          onClick={() => {
            increaseNumber();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          resetNumber();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
