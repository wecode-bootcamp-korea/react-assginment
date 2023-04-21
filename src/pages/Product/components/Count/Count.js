import React from "react";
import "./Count.scss";

const Count = (props) => {
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={props.decrease}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={props.increase}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setcount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
