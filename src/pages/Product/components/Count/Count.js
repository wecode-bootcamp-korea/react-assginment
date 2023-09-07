import React from "react";
import "./Count.scss";

const Count = (props) => {
  const deleteCount = () => {
    if (props.count === 1) {
    } else {
      props.setCount(props.count - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={deleteCount}>-</button>
        <div className="countInputText">{props.count}</div>
        <button
          onClick={() => {
            props.setCount(props.count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
