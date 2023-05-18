import React, { useState } from 'react';
import './Count.scss';

const Count = () => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={subtractCount}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={addCount}>+</button>
      </div>
      <button className="reset-btn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
