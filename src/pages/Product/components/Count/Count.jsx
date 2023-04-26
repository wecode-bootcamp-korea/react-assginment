import React from "react";
import "./Count.scss";

const Count = ({ buyCount, setBuyCount, counter }) => {

  // 출력
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => counter(-1)}>-</button>
        <div className="countInputText">{buyCount}</div>
        <button onClick={() => counter(1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setBuyCount(1)}>
        reset
      </button>
    </div>
  );

};

export default Count;
