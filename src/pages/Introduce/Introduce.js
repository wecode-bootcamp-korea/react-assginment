import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Introduce.scss';

const Introduce = () => {
  
  const handleInput = () => {
    console.log('input 태그 동작');
  };

  const navigate = useNavigate();
  const goToProduct = () => {
    navigate('/product');
  };

  return (
    <div className="introduce">
      <article className="container">
        <img alt="main_img" className="profileImg" src="images/profile.jpg"></img>
        <div className="userInfoBox">
          <p className="profileName">김태원</p>
          <p className="generation">45기</p>
        </div>
        <div className="eventBox">
          <input type="text" className="inputBox" onChange={handleInput}></input>
          <button className="post" onClick={goToProduct}>클릭</button>
        </div>
        <p><Link to='/product'>product 페이지로 이동</Link></p>
      </article>
    </div>
  );
}

export default Introduce;