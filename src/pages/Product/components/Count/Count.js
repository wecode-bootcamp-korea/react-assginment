import React from "react";
import "./Count.scss";

const Count = (props) => {

  const plusMinus = (num) => {
    if (props.count === 1 && num === -1) return; 
    props.setCount(props.count + num)
  }
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {plusMinus(-1)}}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={() => {plusMinus(+1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {props.setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
