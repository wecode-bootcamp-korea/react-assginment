import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount((preNum) => preNum + 1);
  };

  const handleMinusButton = () => {
    if (count > 1) {
      setCount((preNum) => preNum - 1);
    } else if (count === 1) {
      alert("이미 1 입니다.");
    }
  };

  const resetButton = () => {
    setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinusButton}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={handleButton}>+</button>
      </div>
      <button className="resetBtn" onClick={resetButton}>
        reset
      </button>
    </div>
  );
};

export default Count;
