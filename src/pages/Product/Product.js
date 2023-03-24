import React from "react";
import Count from "./components/Count/Count";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const price = 300;
  const totalPrice = price;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-white.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton></ColorButton>
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color></Color>
          <div className="quantity">
            <span> 수량 : </span>
            <Count></Count>
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Product;
