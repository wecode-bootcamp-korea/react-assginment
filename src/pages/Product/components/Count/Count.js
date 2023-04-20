import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);
  const minusOne = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  const plusOne = () => {
    setCount(count + 1);
  };
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusOne}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={plusOne}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
