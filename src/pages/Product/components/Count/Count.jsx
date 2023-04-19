import React, { useState } from "react";
import "./Count.scss";

const Count = () => {

  // 변수
  const [count, setCount] = useState(1);

  // 함수
  const countUp = () => setCount(count + 1);
  const countDown = () => count > 1 ? setCount(count - 1) : null;
  const reset = () => setCount(1);

  // 출력
  return (
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
  );

};

export default Count;
