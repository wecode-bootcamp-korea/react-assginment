import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Introduce.scss';

function Introduce() {
  function handleInput() {
    console.log('input 태그 동작');
  }

  const navigate = useNavigate();
  function handleButton() {
    navigate('/product');
  }

  return (
    <main className="introduce">
      <article className="card">
        <img src="/images/wecode_logo.png" alt="wecode logo" className="logo" />
        <a className="myName">손자현</a>
        <p className="description">46기</p>
        <div className="inputContainer">
          <input type="text" className="inputBox" onChange={handleInput} />
          <button type="button" className="inputBtn" onClick={handleButton}>
            클릭
          </button>
        </div>
        <Link to="/product" className="link">
          product 페이지로 이동
        </Link>
      </article>
    </main>
  );
}

export default Introduce;
