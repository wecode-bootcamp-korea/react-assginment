import React, { useState } from 'react';
import './Product.scss';
import Color from './components/Color/Color';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import ColorButton from './components/ColorButton/ColorButton';
import { useEffect } from 'react';

const Product = () => {
  const price = 300;
  const totalPrice = price;
  const [amount, setAmount] = useState(1);
  const [mockData, setMockData] = useState([0]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((response) => response.json())
      .then((result) => setMockData(result));
  }, []);

  function increaseAmount() {
    setAmount(amount + 1);
  }

  function decreaseAmount() {
    setAmount(amount - 1);
  }

  function resetAmount() {
    setAmount(1);
  }

  const [imgColor, setImgColor] = useState('white');

  function whiteImg() {
    setImgColor('white');
  }

  function redImg() {
    setImgColor('red');
  }

  function yellowImg() {
    setImgColor('yellow');
  }

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${mockData[0] && mockData[0].productImage}${imgColor}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton />
        </div>
        <div className="productDetailInfo">
          <span className="title">
            {mockData[0] && mockData[0].productTitle}
          </span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>
            가격 : {mockData[0] && mockData[0].productPrice.toLocaleString()} 원
          </span>
          <Color whiteImg={whiteImg} redImg={redImg} yellowImg={yellowImg} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              resetAmount={resetAmount}
            />
          </div>
          <span>최종 가격 : {(totalPrice * amount).toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={mockData[0] && mockData[0].productReview} />
      </div>
    </div>
  );
};

export default Product;
