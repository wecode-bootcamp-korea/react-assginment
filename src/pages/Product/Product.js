import React, { useState } from "react";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import "./Product.scss";

const Product = () => {
  const price = 300;
  const[totalPrice, setTotalPrice] = useState(price);
  const[review, setReview] = useState(false);
  const[color, setColor] = useState("white");
  const[count, setCount] = useState(1);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
        <img
          src={`/images/golf-ball-${color}.jpg`}
          alt={`golf-ball-${color}`}
        />
          {/* ColorButton 컴포넌트 위치 */}
        <ColorButton color={color} setColor={setColor}/>
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>

          {/* Color 컴포넌트 위치 */}
        <Color color={color} setColor={setColor} ></Color>

          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
        <Count count={count} setCount={setCount} setTotalPrice ={setTotalPrice} price = {price} totalPrice = {totalPrice}/>

          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
      <Review review = {review} setReview = {setReview} />

      </div>
    </div>
  );
};

export default Product;
