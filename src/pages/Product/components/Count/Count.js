import React from "react";
import "./Count.scss";

const Count = ({count, setCount}) => {

  const handleAdd = () => {
    setCount(count+1);
  }

  const handleSubtract = () => {
    if(count > 1) {
    setCount(count-1);
    } else {
      setCount(1);
    }
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleSubtract}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={handleAdd}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
