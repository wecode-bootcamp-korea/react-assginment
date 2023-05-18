import React from 'react';
import './Count.scss';

const Count = props => {
  const addCount = () => {
    props.setCount(props.count + 1);
  };

  const subtractCount = () => {
    if (props.count > 1) props.setCount(props.count - 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={subtractCount}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={addCount}>+</button>
      </div>
      <button className="reset-btn" onClick={() => props.setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
