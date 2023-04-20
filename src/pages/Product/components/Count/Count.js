import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count >= 2) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinus}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {}}>
        reset
      </button>
    </div>
  );
};

export default Count;
