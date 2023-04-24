import React from "react";
import "./Count.scss";

const Count = (props) => {
  const { count, setCount } = props;

  const minusOne = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  const plusOne = () => {
    setCount(count + 1);
  };

  const resetOne = () => {
    setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusOne}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={plusOne}>+</button>
      </div>
      <button className="resetBtn" onClick={resetOne}>
        reset
      </button>
    </div>
  );
};

export default Count;
