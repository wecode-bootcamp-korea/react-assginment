import React from "react";
import "./Count.scss";

const Count = ({ number, setNumber }) => {
  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number <= 1) {
      return;
    }
    setNumber(number - 1);
  };

  const resetNum = () => {
    setNumber(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          resetNum();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
