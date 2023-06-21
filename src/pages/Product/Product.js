import React, { useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "../components/Nav/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review"
import "./Product.scss";



const Product = () => {
  const [changedColor, setChangedColor] = useState("white");
  const [count, setCount] = useState(1);
  const [showReview, setShowReview] = useState(false);


  const price = 300;
  const totalPrice = price * count;


  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${changedColor}.jpg`} 
            alt={`golf-ball`}
          />
         <ColorButton color={changedColor} setColor={setChangedColor} />
          
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color changedColor={changedColor} setChangedColor={setChangedColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={Count} setNumber={setCount} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review showreview={showReview} setShowReview={setShowReview} />
      </div>
    </div>
  );
};

export default Product;
