import React, { useState } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  const price = 300;
  const [boxColor, setBoxColor] = useState("white");
  const [counting, setCounting] = useState(1);

  const handleColorChange = (color) => {
    setBoxColor(color);
  };

  const handleCountChange = (x) => {
    if (x >= 1) {
      setCounting(x);
    }
  };
  const [viewing, setViewing] = useState(false);

  const toggleReview = () => {
    setViewing(!viewing);
  };

  const totalPrice = price * counting;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`/images/golf-ball-${boxColor}.jpg`} alt={`golf-ball`} />
          <ColorButton
            boxColor={boxColor}
            handleColorChange={handleColorChange}
          />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color boxColor={boxColor} handleColorChange={handleColorChange} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              counting={counting}
              setCounting={setCounting}
              handleCountChange={handleCountChange}
            />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review viewing={viewing} toggleReview={toggleReview} />
      </div>
    </div>
  );
};

export default Product;
