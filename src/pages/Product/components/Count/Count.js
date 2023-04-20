import React, {useState} from "react";
import "./Count.scss";

const Count = (props) => {
  // const [ count, setCount ] = useState(1);/
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {(props.count <= 1 ? props.setCount(1) : props.setCount(props.count-1))}}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={() => {props.setCount(props.count+1)}} count={props.count+1}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {props.setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
