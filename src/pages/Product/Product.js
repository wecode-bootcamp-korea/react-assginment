import React, { useState } from 'react';
import './Product.scss';
import ColorButton from './components/ColorButton/ColorButton';
import Color from './components/Color/Color';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import './Product.scss';

const Product = () => {
  const [color, setColor] = useState('white');
  const [counter, setCount] = useState(1);
  const [review, setReview] = useState(false);
  const price = 300;
  const totalPrice = price * counter;
  if (counter <= 0) {
    setCount(1);
  }
  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color setColor={setColor} color={color} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count counter={counter} setCount={setCount} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={review} setReview={setReview} />
      </div>
    </div>
  );
};

export default Product;

// 1. 어디가 바뀔지 확인하고 어떻게 바뀌는지 확인
// 2. 어떤 이벤트가 있어야지 변하는지 , 어떻게 변하는지 확인
// 3. 함수의 순서를 확인

// 불리언값으로 렌더링하는 경우는 앞에 is를 붙여 줌

// 함수안에서 조건문안에 return을 적으면 그대로 멈춤
