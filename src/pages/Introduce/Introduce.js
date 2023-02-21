import React from "react";
import "./Introduce.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };

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
        <input type="text" className="inp_search"  onChange={handleInput} /><button className="btn_click" onClick={goToProduct}>클릭</button>
        <Link to="/product" className="link_product">product 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Introduce;
