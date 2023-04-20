import React from 'react';
import './Introduce.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Introduce = () => {
    const handleInput = () => {
      console.log("input 태그 동작");
    }
    
    const navigate = useNavigate();
    const goToProduct = () => {
      navigate('/product');
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
                    <input className ="input"
                    type='text'onChange={handleInput}>
                    </input>
                    <button onClick={goToProduct}>로그인
                    </button>
                  </div>
                  <Link to="/product">product 페이지로 이동</Link>
              </div>
            </div>
        </div>
        </>
  )
}

export default Introduce;