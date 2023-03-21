import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Introduce.scss';

const Introduce = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInput = () => {
    console.log('input 태그 동작');
  }

  const handleClick = () => {
    navigate('./product');
  }

  return(
    <div className="introduce">
      <div className="card">
        <span>
          <div className='card-image' style={{ backgroundImage: "url('https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside')"}} />       
          <div className="name">김정환</div>
          <div className="gen-no">44기</div>
          <form onSubmit={handleSubmit}>   
            <input type="text" name="input" id="" onInput={handleInput} />
            <button onClick={handleClick}>클릭</button> 
          </form>
          <Link to="/product">Product 페이지로 이동</Link>
        </span>
      </div> 
      
    </div>
  )
}

export default Introduce;