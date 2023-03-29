import React from "react";
import "./Count.scss";

const Count = (props) => {

  const {num, setNum} = props;

  let decrease = () => {
    if( num > 1 ){
      setNum(num - 1)
    }
  }
  const setCountNum = () => {
    props.getCountNum(num)
  }

  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {decrease()}}>-</button>
        <div className="countInputText" > {num} </div>
        <button onClick={() => {setNum(num +1)}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setNum(1); setCountNum();}}>
        reset
      </button>
    </div>
  );
};

export default Count;
