import React, {useState} from "react";
import "./Count.scss";

const Count = () => {

  const [count , setCount] = useState(1);
  const downCount = () => {
    if(count > 1 ){
      setCount(count - 1 )
    }else{
      return
    }
  }
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={downCount}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => {setCount(count + 1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setCount(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
