import React from "react";
import "./Count.scss";

const Count = ({ count, setCount }) => {
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(1);
  };
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={increase}>+</button>
      </div>
      <button className="resetBtn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
