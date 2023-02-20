import React from 'react';
import './Introduce.css';

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
            출력
          </button>
        </form>
      </div>
    </div>
  );
};
const handleInput = () => {
  console.log('');
};
const handleButton = () => {
  console.log('');
};
export default Introduce;
