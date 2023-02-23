import React from 'react';
import './Count.scss';
import { useState } from 'react';

const Count = () => {
  const [counter, setCount] = useState(1);
  if (counter <= 0) {
    setCount(1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setCount(counter - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{counter}</div>
        <button
          onClick={() => {
            setCount(counter + 1);
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
