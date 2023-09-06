import React, { useState, useEffect } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  const price = 300;
  const [count, setCount] = useState(1);
  const handleIncreaseBtn = () => {
    setCount(count + 1);
  };
  const handleDecreaseBtn = () => {
    if (count - 1) {
      setCount(count - 1);
    }
  };
  const handleResetBtn = () => {
    setCount(1);
  };
  const [color, setColor] = useState("white");
  const colorHandlerButton = (e) => {
    setColor(e);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/mockData.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${data[0]?.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{data[0]?.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} colorHandlerButton={colorHandlerButton} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              count={count}
              handleIncreaseBtn={handleIncreaseBtn}
              handleDecreaseBtn={handleDecreaseBtn}
              handleResetBtn={handleResetBtn}
            />
          </div>
          <span>최종 가격 : {count * data[0]?.price} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={data[0]?.review} />
      </div>
    </div>
  );
};

export default Product;
