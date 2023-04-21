import React from "react";
import "./Count.scss";

const Count = ({ count, counter, setCount }) => {

  // 출력
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => counter(-1)}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => counter(1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );

};

export default Count;
