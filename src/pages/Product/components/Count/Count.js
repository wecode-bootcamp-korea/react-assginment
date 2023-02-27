import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  // const [count, setCount] = useState(1);

  const minusCount = () => {
    // if (count === 1 && num === -1) return;
    if (props.count > 1) {
      props.setCount(props.count - 1);
    } else {
      props.setCount(1);
    }
    
  }

  const plusCount = () => {
    props.setCount(props.count + 1); 
  }
  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusCount}>-</button>
        <div className={`countInputText ${props.count}`}>{props.count}</div>
        <button onClick={plusCount}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {props.setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;