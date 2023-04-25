import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NewBox from './NewBox';
import './Introduce.scss';

const Introduce = () => {
    const handleInput = () => {
      console.log("input 태그 동작");
    }
    
    const navigate = useNavigate();
    const goToProduct = () => {
      navigate('/product');
    }

  return (
        <div className='Introduce'>
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
              <div className='color-container'>
                  {COLOR_INFO_LIST.map((info) => (
                    <NewBox
                      key={info.id}
                      boxColor={info.boxColor}
                      color={info.color}
                      rgbColor={info.rgbColor}
                    />
                  ))}
              </div>
            </div>
          </div>
        )
      }

export default Introduce;

const COLOR_INFO_LIST = [
  {id: 1, boxColor: 'red', color: 'red', rgbColor:'255, 0, 0'},
  {id: 2, boxColor: 'yellow', color: 'yellow', rgbColor:'255, 255, 0'},
  {id: 3, boxColor: 'green', color: 'green', rgbColor:'0, 128, 0'},
  {id: 4, boxColor: 'blue', color: 'blue', rgbColor:'0, 0, 255'}
];
