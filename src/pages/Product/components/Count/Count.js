import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [number, setNumber] = useState(1);

  function upNumber() {
    setNumber(number + 1);
    // setNumber((prev)=>prev+1)
  }

  function downNumber() {
    if (count <= 1) {
      return;
    }
    setNumber(number - 1);
  }

  function reset() {
    setNumber(1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            downNumber(number);
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          onClick={() => {
            upNumber(number);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          reset(number);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
