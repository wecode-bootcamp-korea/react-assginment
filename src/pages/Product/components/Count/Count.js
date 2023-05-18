import React from "react";
import "./Count.scss";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
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
