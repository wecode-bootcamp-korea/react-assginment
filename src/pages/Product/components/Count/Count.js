import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {

 

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {
          if(props.count <= 1){
            props.setCount(1);
          } else {
            props.setCount(props.count - 1);
          }
        }}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={() => {props.setCount( props.count + 1 )}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {
        props.setCount(1);
      }}>
        reset
      </button>
    </div>
  );
};

export default Count;
