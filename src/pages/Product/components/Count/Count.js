import React from "react";
import "./Count.scss";
const Count = (props) => {
  const { count, setCount } = props;
  const increasBtn = () => {
    setCount(count + 1);
  };
  const decreaseBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const resetBtn = () => {
    setCount(1);
  };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            decreaseBtn();
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            increasBtn();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          resetBtn();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
