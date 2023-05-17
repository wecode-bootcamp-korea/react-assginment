import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={onMinus}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={onPlus}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
