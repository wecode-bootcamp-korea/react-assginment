import React from "react";
import "./Count.scss";

const Count = (props) => {
  const handleButton = () => {
    props.setCount((preNum) => preNum + 1);
  };

  const handleMinusButton = () => {
    if (props.count > 1) {
      props.setCount((preNum) => preNum - 1);
    } else if (props.count === 1) {
      alert("이미 1 입니다.");
    }
  };

  const resetButton = () => {
    props.setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinusButton}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={handleButton}>+</button>
      </div>
      <button className="resetBtn" onClick={resetButton}>
        reset
      </button>
    </div>
  );
};

export default Count;
