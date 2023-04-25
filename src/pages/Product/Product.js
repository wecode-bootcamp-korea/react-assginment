import React, { useState } from "react";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ColorButton from "./components/ColorButton/ColorButton";
import "./Product.scss";

const Product = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("white");

  //count용 함수
  const decrease = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const price = 300;
  const totalPrice = price;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball-${color}`}
          />
          <ColorButton color={color} setcolor={setColor} />
          {/* ColorButton 컴포넌트 위치 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} setcolor={setColor} />
          {/* Color 컴포넌트 위치 */}
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              count={count}
              decrease={decrease}
              increase={increase}
              setcount={setCount}
            />
            {/* Count 컴포넌트 위치 */}
          </div>
          <span>최종 가격 : {(totalPrice * count).toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
        {/* Review 컴포넌트 위치 */}
      </div>
    </div>
  );
};

export default Product;
