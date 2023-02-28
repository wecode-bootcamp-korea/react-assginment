import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './introduce.scss';

const Introduce = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/product');
  };

  return (
    <div className="introduce">
      <img alt="myPicture" src="img/비니비니.jpg" />
      <div className="information">
        <p className="myName">문은빈</p>
        <p>43기</p>
        <date className="inputInfo">
          <input type={Text} />
          <button onClick={handleButton}>클릭</button>
        </date>
        <Link to="/product">Product 페이지로 이동!</Link>
      </div>
    </div>
  );
};

export default Introduce;
