import React from "react";
import "./Count.scss";

const Count = (props) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.handleDecreaseBtn();
          }}
        >
          -
        </button>
        <div className="countInputText">{props.count}</div>
        <button
          onClick={() => {
            props.handleIncreaseBtn();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.handleResetBtn();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
