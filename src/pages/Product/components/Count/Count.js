import React,{ useState } from "react";
import "./Count.scss";

const Count = ({count, setCount}) => {
  

  const decreaseCount = () => { 
    if (count > 1) {
      setCount(count -1)
    } else {
      return;
    };
  };

  const increaseCount = () => {
    setCount(count +1);
  };

  const resetCount = () => {
    setCount(1);
  };


  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decreaseCount}>-</button> 
        <div className="countInputText">{count}</div> 
        <button onClick={increaseCount}>+</button>
      </div>
      <button className="resetBtn" onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
