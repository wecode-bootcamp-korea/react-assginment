import React, { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {

  // DB
  const [{ img, title, price, count, review }, setProduct] = useState([]);

  // 변수
  const colors = [`white`, `red`, `yellow`];      // 색상
  const [color, setColor] = useState(colors[0]);  // 색상 변경
  const [buyNum, setBuyNum] = useState(0);        // 가격 카운트
  const totalPrice = price * buyNum;              // 가격 총합

  // 함수
  const changeColor = col => setColor(col); // 색상 변경

  const counter = number => {   // 구매 수량 증가
    if (buyNum === 1 && number === -1) return;
    setBuyNum(buyNum => buyNum + number);
  };

  // 동작
  useEffect(() => {
    fetch(`/data/db.json`)
      .then(res => res.json())
      .then(res => setProduct(res));
  }, []);

  useEffect(() => {
    setBuyNum(count);
  }, [count]);

  // 출력
  return (
    <div className="product">

      {/* 상품 정보 */}
      <div className="productDetail">

        {/* 상품 이미지 */}
        <div className="productDetailImg">
          <img
            src={`${img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} changeColor={changeColor} />
        </div>

        {/* 상품 상세 정보 */}
        <div className="productDetailInfo">
          <span className="title">{title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price?.toLocaleString()} 원</span>
          <Color colors={colors} color={color} changeColor={changeColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} buyNum={buyNum} setBuyNum={setBuyNum} counter={counter} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>

      </div>

      {/* 상품평 */}
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={review} />
      </div>

    </div>
  );
};

export default Product;
