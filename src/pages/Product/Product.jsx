import React from "react";
import { useState } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {

  // 변수
  const colors = [`white`, `red`, `yellow`];
  const [color, setColor] = useState(colors[0]);
  const price = 300;
  const [totalPrice, setTotalPrice] = useState(price);
  const [count, setCount] = useState(1);

  // 함수
  const changeColor = col => setColor(col);

  const countUp = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + price);
  };

  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  const reset = () => {
    setCount(1);
    setTotalPrice(price);
  };

  // 출력
  return (
    <>
      <div className="product">
        <div className="productDetail">
          <div className="productDetailImg">
            <img
              src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
              alt={`golf-ball`}
            />
            <ColorButton colors={color} changeColor={changeColor} />
          </div>
          <div className="productDetailInfo">
            <span className="title">골프공</span>
            <span>비거리를 비약적으로 늘려줍니다</span>
            <span>가격 : {price.toLocaleString()} 원</span>
            <Color colors={colors} color={color} changeColor={changeColor} />
            <div className="quantity">
              <span> 수량 : </span>
              <Count count={count} countUp={countUp} countDown={countDown} reset={reset} />
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
    </>
  );
};

export default Product;
