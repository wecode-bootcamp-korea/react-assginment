import React from "react";
import "./Count.scss";

const Count = ({ buyNum, setBuyNum, counter }) => {

  // 출력
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => counter(-1)}>-</button>
        <div className="countInputText">{buyNum}</div>
        <button onClick={() => counter(1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setBuyNum(1)}>
        reset
      </button>
    </div>
  );

};

export default Count;
