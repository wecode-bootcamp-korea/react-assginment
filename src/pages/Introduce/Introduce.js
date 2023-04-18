import React from 'react';
import './Introduce.scss';

const Introduce = () => {
    const handleInput = () => {
      console.log("input 태그 동작");
    }

      function handleButton() {
        console.log("button 태그 동작");
      }
  
  return (
      <>
        <div className='wrap'>
            <div className='container'>
                <div className='box'>
                </div>
                <div className='name-box'>
                  <div className = "name1">이수빈</div>
                  <div>45기</div>
                  <div className='inputbox'>
                    <input className ="input" type='text' onChange={handleInput}></input>
                    <button onClick={handleButton}>로그인</button>
                  </div>
              </div>
            </div>
        </div>
        </>
  )
}

export default Introduce;