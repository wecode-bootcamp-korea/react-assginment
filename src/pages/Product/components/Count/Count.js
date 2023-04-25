import React , {useState} from "react";
import "./Count.scss";

const Count = () => {

  const [num, setNum] = useState(1);

  const add = () => {
    setNum(num+1);
  }

  const minus = () => {
    if(num > 1 ){
      setNum(num - 1)
    }else
        return;

    }

  


  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minus}>-</button>
        <div className="countInputText">{num}</div>
        <button onClick={add}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setNum(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;



// state 값을 직접 바꾼다 X
// setState를 호출해줘야한다. 
