import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  let [countNumber, setCount] = useState(1);

  const vanDecrease = () => {
    if (countNumber == 1) {
      setCount(countNumber);
    } else {
      setCount(countNumber - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            vanDecrease();
          }}
        >
          -
        </button>
        <div className="countInputText">{countNumber}</div>
        <button
          onClick={() => {
            setCount(countNumber + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
