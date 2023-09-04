import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {
     if(num>1){
         setNum(num-1);
        }else{
          return {num};
        }
         }}>-</button>
        <div className="countInputText">{num}</div>
        <button onClick={() => {

            setNum(num+1);}}>+</button>
      
      </div>
      <button className="resetBtn" onClick={() => {
        setNum(1);
      }}>
        reset
      </button>
    </div>
  );
};

export default Count;
