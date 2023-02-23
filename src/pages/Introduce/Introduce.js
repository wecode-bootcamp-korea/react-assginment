import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Introduce.scss';

const Introduce = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/product');
    console.log('button 태그 동작');
  };
  const handleInput = () => {
    console.log('input 태그 동작');
  };

  return (
    <div className="Introduce">
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
            출력
          </button>
          <p>
            <Link to="/product"> prdouct 페이지로 이동 </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Introduce;
