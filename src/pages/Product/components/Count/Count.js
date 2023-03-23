import React, { useState } from 'react';
import './Count.scss';

const Count = ({ increaseAmount, decreaseAmount, resetAmount }) => {
  const [num, setNum] = useState(1);

  function increase() {
    setNum(num + 1);
    increaseAmount();
  }

  function decrease() {
    if (num > 1) {
      setNum(num - 1);
      decreaseAmount();
    }
  }

  function reset() {
    setNum(1);
    resetAmount();
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{num}</div>
        <button onClick={increase}>+</button>
      </div>
      <button className="resetBtn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
