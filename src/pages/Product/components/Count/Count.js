import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [number, setNumber] = useState(1);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    return number > 1 ? setNumber(number - 1) : false;
  };

  const resetNum = () => {
    setNumber(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          resetNum();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
