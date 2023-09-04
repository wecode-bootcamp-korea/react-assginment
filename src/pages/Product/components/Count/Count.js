import React, { useState } from "react";
import "./Count.scss";

const Count = () => {

  const [count, setCount] = useState(1);

  const minus=()=>{
    if(count > 1){
      setCount(count - 1);
    }else{
      setCount(1);
      alert('숫자가 1보다 작습니다');
    }
  };

  const plus=()=>{
    setCount(count + 1);
  }

  const reset=()=>{
    setCount(1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minus}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={plus}>+</button>
      </div>
      <button className="resetBtn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
