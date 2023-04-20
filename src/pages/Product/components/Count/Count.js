import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [counting, setCounting] = useState(1);
  const handleCountChange = (x) => {
    if (x >= 1) {
      setCounting(x);
    }
  };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            handleCountChange(counting - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{counting}</div>
        <button
          onClick={() => {
            handleCountChange(counting + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCounting(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
