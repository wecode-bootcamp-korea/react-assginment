import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const counter = (e, count) => {
    let target = e.target.className;

    if (target === 'minus') {
      if (count <= 1) {
        console.log("숫자가 1일 때는 더 이상 숫자가 내려가지 않습니다.");
      } else {
        setCount(count - 1);
      }
    } else if (target === 'plus') {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  }

  return (
    <div className="count">
      <div className="countInput">
        <button className="minus" onClick={(e) => {counter(e, count)}}>-</button>
        <div className="countInputText">{count}</div>
        <button className="plus" onClick={(e) => {counter(e, count)}}>+</button>
      </div>
      <button className="resetBtn" onClick={(e) => {counter(e, counter)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
