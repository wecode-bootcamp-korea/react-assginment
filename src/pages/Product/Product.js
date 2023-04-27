import React, { useState } from "react";
import "./Product.scss";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count"; 
import Review from "./components/Review/Review"
import ColorButton from "./components/ColorButton/ColorButton";

const Product = () => {
  const [selectedColor, setSelectedColor] = useState("white"); // 선택된 색깔 상태 관리
  const price = 300;
  const [quantity, setQuantity] = useState(1); // 수량 상태 관리
  const totalPrice = price * quantity;

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${selectedColor}.jpg`} // 선택된 색깔에 맞는 이미지 경로 넣기
            alt={`golf-ball-${selectedColor}`}
          />
          <ColorButton name="white" click={handleColorClick} />
          <ColorButton name="red" click={handleColorClick} />
          <ColorButton name="blue" click={handleColorClick} />
          {/* 다른 색상 버튼들 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color selectedColor={selectedColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count quantity={quantity} onChange={handleQuantityChange} />
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







