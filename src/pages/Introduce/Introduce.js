import React from 'react';
import { Link } from 'react-router-dom';
import './Introduce.scss';

const Introduce = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInput = () => {
    console.log('input 태그 동작');
  }

  const handleClick = () => {
    console.log('button 태그 동작');
  }

  return(
    <div className="container">
      <div className="card">
        <span>
          <div className='card-image'></div>       
          <div className="name">김정환</div>
          <div className="gen-no">44기</div>
          <form onSubmit={handleSubmit}>   
            <input type="text" name="input" id="" onInput={handleInput} />
            <Link to="/product">
              <button onClick={handleClick}>클릭</button> 
            </Link>
            
          </form>
          <Link to="/product">Product 페이지로 이동</Link>
        </span>
      </div> 
      
    </div>
  )
}

export default Introduce;