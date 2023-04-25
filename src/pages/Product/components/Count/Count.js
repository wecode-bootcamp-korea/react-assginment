import React from "react";
import "./Count.scss";

const Count = (props) => {

  const countMinus = () => {
    if( 1 >= props.count) return;
    props.setCount(props.count - 1);
  }

  const countPlus = () => {
    props.setCount(props.count + 1)
  }

  const handleReset = () => {
    props.setCount(1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={countMinus}>-</button>
        <div className="countInputText">{`${props.count}`}</div>
        <button onClick={countPlus}>+</button>
      </div>
      <button className="resetBtn" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default Count;
