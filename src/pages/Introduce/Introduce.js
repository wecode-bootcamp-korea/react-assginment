import React from 'react';
import { Link } from 'react-router-dom';
import './Introduce.scss';

const Introduce = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="wecode">
          <p>&#62;wecode</p>
        </div>
      </div>
      <div className="secContainer">
        <strong className="p">김개발</strong>
        <p>43 기</p>
      </div>
      <div className="input">
        <form>
          <input type="text" onChange={handleInput} />
          <button type="button" onClick={handleButton}>
            <Link to="/product">출력</Link>
          </button>
          <p>
            <Link to="/product"> prdouct 페이지로 이동 </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
const handleInput = () => {
  console.log('input 태그 동작');
};
const handleButton = () => {
  console.log('button 태그 동작');
};
export default Introduce;
