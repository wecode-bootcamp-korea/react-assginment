import React, { useState } from 'react';
import Color from './components/Color/Color';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import ColorButton from './components/ColorButton/ColorButton';
import './Product.scss';

const Product = () => {
  const [count, setCount] = useState(1);
  const [golfBallImg, setGolfBallImg] = useState('/images/golf-ball-white.jpg');
  const [color, setColor] = useState('white');

  const price = 300;
  const totalPrice = price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={golfBallImg} alt="golf-ball" />
          <ColorButton
            golfBallImg={golfBallImg}
            setGolfBallImg={setGolfBallImg}
          />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color
            color={color}
            setColor={setColor}
            golfBallImg={golfBallImg}
            setGolfBallImg={setGolfBallImg}
          />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
