import React from "react";
import "./Count.scss";

const Count = (props) => {

  const plus=()=>{
    props.plusHandler(props.countNum);
  }

  const minus=()=>{
    props.minusHandler(props.countNum) ;
  }

  const reset=()=>{
    props.resetHandler();
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minus}>-</button>
        <div className="countInputText">{props.countNum}</div>
        <button onClick={plus}>+</button>
      </div>
      <button className="resetBtn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
