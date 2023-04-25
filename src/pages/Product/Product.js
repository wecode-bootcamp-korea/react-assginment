import React, { useState } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  // 가격*수량 = 최종가격 로직
  const [count, setCount] = useState(1);
  // console.log("수량 알려줘 ", count);

  const price = 300;
  const totalPrice = price * count;

  // 색상 누르면, <ColorButton /> 색상 변경하기.
  const [color, setColor] = useState("white");
  console.log("지금 색상 알려줘 ", color);

  // 색상 누르면, 상품 이미지 변경하기.
  const [img, setImg] = useState(`/images/golf-ball-${color}.jpg`);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            // src={`/images/golf-ball-red.jpg`} // color 이름에 따라 다른 이미지 경로 넣기/
            src={img}
            alt={`golf-ball`}
          />
          <ColorButton color={color} img={img} setImg={setImg} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor} setImg={setImg} />
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
