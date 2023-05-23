import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Introduce.scss';

function Introduce() {
  function handleInput() {
    //console.log('input 태그 동작');
  }

  const navigate = useNavigate();
  function handleButton() {
    navigate('/product');
  }

  return (
    <main className="introduce">
      <article className="card">
        <img src="/images/wecode_logo.png" alt="wecode logo" className="logo" />
        <a className="my-name">손자현</a>
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
      <div className="colorCardContainer">
        {COLOR_CARD.map(info => (
          <article className="colorCard" key={info.id}>
            <div className={info.name} />
            <p>이름 : {info.name}</p>
            <p>rgb: {info.rgb}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Introduce;

const COLOR_CARD = [
  { id: 1, name: 'red', rgb: '255, 0, 0' },
  { id: 2, name: 'yellow', rgb: '255, 255, 0' },
  { id: 3, name: 'green', rgb: '0, 128, 0' },
  { id: 4, name: 'blue', rgb: '0, 0, 255' },
];
