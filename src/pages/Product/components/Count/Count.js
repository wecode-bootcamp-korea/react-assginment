import React from "react";
import "./Count.scss";

const Count = (props) => {
  const handleMinus = () => {
    if (props.count >= 2) {
      props.setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinus}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={() => props.setCount((prev) => prev + 1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {}}>
        reset
      </button>
    </div>
  );
};

export default Count;
