import React from "react";
import "./Count.scss";

const Count = (props) => {
  
  const plus = () => {props.setCount(props.count + 1)};
  const resetBtn = () => {props.setCount(1)};
  const minus = () => {
    if(props.count > 1){
      props.setCount(props.count-1);
    }else{props.setCount(1)}
  };
  

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minus}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={plus}>+</button>
      </div>
      <button className="resetBtn" onClick={resetBtn}>
        reset
      </button>
    </div>
  );
};

export default Count;
