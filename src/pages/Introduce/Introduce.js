import React from "react";
import "./Introduce.scss";

const Introduce = () => {

  function handleInput() {
    console.log('input 태그 동작');
  }

  function handleButton() {
    console.log('button 태그 동작');
  }

  return (
    <div className="wrap_introduce">
      <div className="box_introduce">
        <span className="thumb_introduce">&#62; wecode</span>
        <strong className="tit_name">김개발</strong>
        <span className="txt_introduce">오잉</span>
        <input type="text" className="inp_search"  onChange={handleInput} /><button className="btn_click" onClick={handleButton}>클릭</button>
      </div>
    </div>
  );
};

export default Introduce;
