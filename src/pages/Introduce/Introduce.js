import React from 'react';
import './Introduce.scss';
import { Link, useNavigate } from 'react-router-dom';

function Introduce() {
  const clamp = '>wecode';

  const Navigate = useNavigate();

  function handleInput() {
    console.log('input 태그 동작');
  }

  function handleButton(e) {
    console.log('button 태그 동작');
    Navigate('/product');
    e.preventDefault();
  }

  return (
    <div className="introduce">
      <div className="blackBox">
        <div className="rogo">{clamp}</div>
      </div>
      <h1>김영운</h1>
      <h2>44기</h2>
      <form>
        <input onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
      </form>
      <Link className="link" to="/product">
        product 페이지로 이동
      </Link>
    </div>
  );
}

export default Introduce;
