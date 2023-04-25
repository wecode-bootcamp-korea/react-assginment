import React from "react";
import "./Count.scss";

const Count = ({ count, decrease, increase, setcount }) => {
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={increase}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setcount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
