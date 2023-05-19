import React from "react";
import "./Count.scss";

const Count = ({ count, onChange }) => {
  const handleCount = (value) => {
    if (count + value < 1) return;
    onChange(count + value);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            handleCount(-1);
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            handleCount(1);
          }}
        >
          +
        </button>
      </div>
      <button className="resetBtn" onClick={() => onChange(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
