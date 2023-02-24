import React, {useState} from "react";
import "./Count.scss";

const Count = (props) => {
  const {count, setCount} =props

  if (count < 1) {
    setCount(1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => setCount(count - 1)}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
