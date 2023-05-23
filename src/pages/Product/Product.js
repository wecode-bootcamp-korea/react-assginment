import React, { useState, useEffect } from 'react';
import Color from './components/Color/Color';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import ColorButton from './components/ColorButton/ColorButton';
import './Product.scss';

const Product = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('white');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData-golfBall.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const price = productList.price;
  const totalPrice = price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`${productList.img}${color}.jpg`} alt="golf-ball" />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productList.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price} 원</span>
          <Color color={color} setColor={setColor} />
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
        <Review reviewTitle={productList.review} />
      </div>
    </div>
  );
};

export default Product;
