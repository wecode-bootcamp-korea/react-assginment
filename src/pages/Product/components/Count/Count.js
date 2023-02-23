import React, {useState} from "react";
import "./Count.scss";

const Count = () => {
  const[count, setcount] = useState(1);
  const minCount = () => {
  if(count === 1){
    setcount(1)
  }
  if(count > 1){
    setcount(count-1)
  }

};

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {minCount()}}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => {setcount(count+1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setcount(1);}}>
        reset
      </button>
    </div>
  );
};

export default Count;
