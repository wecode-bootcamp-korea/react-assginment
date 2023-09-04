import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  const counter = (e, count) => {
    let target = e.target.className;

    if (target === 'minus') {
      if (count <= 1) {
        console.log("숫자가 1일 때는 더 이상 숫자가 내려가지 않습니다.");
      } else {
        props.setCount(count - 1);
      }
    } else if (target === 'plus') {
      props.setCount(count + 1);
    } else {
      props.setCount(1);
    }
  }

  return (
    <div className="count">
      <div className="countInput">
        <button className="minus" onClick={(e) => {counter(e, props.count)}}>-</button>
        <div className="countInputText">{props.count}</div>
        <button className="plus" onClick={(e) => {counter(e, props.count)}}>+</button>
      </div>
      <button className="resetBtn" onClick={(e) => {counter(e, counter)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
