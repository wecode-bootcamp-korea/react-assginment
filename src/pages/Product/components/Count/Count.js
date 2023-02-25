import React, { useState } from 'react';
import './Count.scss';

const Count = (props) => {
  // const [state, setState] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => props.setState(props.state - 1)}>-</button>
        <div className="countInputText">{props.state}</div>
        <button onClick={() => props.setState(props.state + 1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => props.setState(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
