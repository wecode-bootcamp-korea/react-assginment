import React from 'react';
import ColorCard from '../ColorCard/ColorCard';
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
      <span>
        <div className="card-container">
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
        <div className="color-card-container">
          {COLOR_CARD_DATA.map(colorList => 
            <ColorCard rgbValue={colorList.color} name={colorList.name} key={colorList.id} />
          )}
        </div>
      </span>
      
    </div>
  )
}

export default Introduce;

const COLOR_CARD_DATA = [
  {id: 1, name: 'red', color: '255, 0, 0'},
  {id: 2, name: 'yellow', color: '255, 255, 0'},
  {id: 3, name: 'green', color: '0, 128, 0'},
  {id: 4, name: 'blue', color: '0, 0, 255'}
];