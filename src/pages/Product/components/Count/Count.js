import React from "react";
import "./Count.scss";

const Count = (props) => {
  const onPlus = () => {
    props.onChange(props.count + 1);
  };

  const onMinus = () => {
    if (props.count > 1) {
      props.onChange(props.count - 1);
    } else {
      props.onChange(1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={onMinus}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={onPlus}>+</button>
      </div>
      <button className="resetBtn" onClick={() => props.onChange(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
