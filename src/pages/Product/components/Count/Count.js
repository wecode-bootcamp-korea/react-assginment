import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);

  const minusCount = () => {
    // if (count === 1 && num === -1) return;
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
    
  }

  const plusCount = () => {
    setCount(count + 1);
  }
  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusCount}>-</button>
        <div className={`countInputText ${count}`}>{count}</div>
        <button onClick={plusCount}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;