import React from "react";
import "./Count.scss";

const Count = ({ count, countUp, countDown, reset }) => {

  // 출력
  return (
    <>
      <div className="count">
        <div className="countInput">
          <button onClick={() => countDown()}>-</button>
          <div className="countInputText">{count}</div>
          <button onClick={() => countUp()}>+</button>
        </div>
        <button className="resetBtn" onClick={() => reset()}>
          reset
        </button>
      </div>
    </>
  );

};

export default Count;
