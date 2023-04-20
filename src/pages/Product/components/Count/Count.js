import React, {useState} from "react";
import "./Count.scss";

const Count = () => {
  const [ state, setState ] = useState(1)
  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {(state <= 1 ? setState(1) : setState(state-1))}}>-</button>
        <div className="countInputText">{state}</div>
        <button onClick={() => {setState(state+1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setState(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
