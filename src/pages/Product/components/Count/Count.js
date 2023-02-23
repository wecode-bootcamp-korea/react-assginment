import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);
  console.log("resetBtn 클릭");
  if (count < 1) {
    setCount(1);
  }
  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {setCount(count-1)}}>-</button>        
        <div className={`countInputText ${count}`}>{count}</div>
        <button onClick={() => {setCount(count+1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;