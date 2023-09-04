import React, {useState} from "react";
import "./Count.scss";

const Count = (props) => {

  

  const downCount = () => {
    if(props.count > 1 ){
      props.setCount(props.count - 1 )
    }else{
      return
    }
  }
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={downCount}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={() => {props.setCount(props.count + 1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {props.setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
