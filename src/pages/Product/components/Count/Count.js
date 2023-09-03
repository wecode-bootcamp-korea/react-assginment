import React from "react";
import { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);
  const handleIncreaseBtn = () => {
    setCount(count + 1);
  };
  const handleDecreaseBtn = () => {
    if (count - 1) {
      setCount(count - 1);
    }
  };
  const handleResetBtn = () => {
    setCount(1);
  };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            handleDecreaseBtn();
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            handleIncreaseBtn();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          handleResetBtn();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
