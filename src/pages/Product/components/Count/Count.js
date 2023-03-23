import React, { useState } from 'react';
import './Count.scss';

const Count = () => {
  const [num, setNum] = useState(1);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    if (num > 1) {
      setNum(num - 1);
    }
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{num}</div>
        <button onClick={increase}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {}}>
        reset
      </button>
    </div>
  );
};

export default Count;
